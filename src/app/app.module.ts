import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppLayoutComponent } from '@layouts/app-layout'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppLayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
