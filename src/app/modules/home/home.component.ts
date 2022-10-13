import { inject } from '@angular/core'
import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { isANumber } from './extra-validators'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    #router = inject(Router)

    minutesList = [1, 2, 3, 4, 5]

    get #value(): number | null {
        if (localStorage.getItem('time')) return JSON.parse(localStorage.getItem('time')) / 60

        return null
    }

    form = new FormGroup({
        minutes: new FormControl<number | null>(this.#value, [
            Validators.required,
            isANumber()
        ])
    })

    onSetMinutes(minutes: number): void {
        const time = minutes * 60

        localStorage.setItem('time', String(time))

        this.#router.navigateByUrl('/cronometro')
    }
}