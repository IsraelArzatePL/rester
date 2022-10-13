import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AppLayoutComponent { }