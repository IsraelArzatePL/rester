import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MatButtonModule } from '@angular/material/button'

import { ChronometerComponent } from './chronometer.component'
import { TimeGuard } from '@guards/time.guard'
import { ExitGuard } from '@guards/exit.guard'

const routes: Routes = [
    {
        path: '',
        component: ChronometerComponent,
        canActivate: [TimeGuard],
        canDeactivate: [ExitGuard]
    }
]

@NgModule({
    declarations: [ChronometerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule
    ]
})
export class ChronometerModule { }