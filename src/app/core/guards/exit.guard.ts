import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

export interface OnExit {
    onExit: boolean
}

@Injectable({
    providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<unknown> {
    canDeactivate(component: OnExit): boolean {
        return component.onExit
    }
}