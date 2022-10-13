import { inject } from '@angular/core'
import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class TimeGuard implements CanActivate {
    #router = inject(Router)

    canActivate(): boolean {
        if (localStorage.getItem('time')) return true

        this.#router.navigateByUrl('/')

        return false
    }
}
