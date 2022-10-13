import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppLayoutComponent } from '@layouts/app-layout'

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        loadChildren: () => import('@modules/home').then(m => m.HomeModule)
    },
    {
        path: 'cronometro',
        component: AppLayoutComponent,
        loadChildren: () => import('@modules/chronometer').then(m => m.ChronometerModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
