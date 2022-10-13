import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MatRippleModule } from '@angular/material/core'

import { HomeComponent } from './home.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatRippleModule
    ]
})
export class HomeModule { }