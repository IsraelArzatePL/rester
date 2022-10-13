import { Injectable } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class TimeState {
    time = new BehaviorSubject<number | null>(null)
    time$ = this.time.asObservable()
}