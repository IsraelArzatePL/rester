import { inject } from '@angular/core'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { takeUntil, Subject, interval } from 'rxjs'

import { OnExit } from '@guards/exit.guard'

@Component({
    templateUrl: './chronometer.component.html',
    styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnExit {
    #router = inject(Router)

    #time: number = JSON.parse(localStorage.getItem('time'))
    #beep = new Audio('assets/sounds/interval_beep.mp3')
    #finaleBeep = new Audio('assets/sounds/finale.mp3')
    minutes = this.#time / 60
    seconds = this.#time
    disabled = false
    onExit = true

    #destroy$ = new Subject()

    onBack(): void {
        this.#router.navigateByUrl('/')
    }

    onStartChronometer(): void {
        this.disabled = true
        this.onExit = false
        this.seconds = this.#time

        interval(1000)
            .pipe(
                takeUntil(this.#destroy$)
            )
            .subscribe(() => {
                this.seconds += -1

                if (this.seconds < 6 && this.seconds > 0) {
                    this.#beep.currentTime = 0
                    this.#beep.play()
                }

                if (this.seconds === 0) {
                    this.#finaleBeep.play()
                    this.disabled = false
                    this.onExit = true
                    this.#destroy$.next(true)
                }
            })
    }
}