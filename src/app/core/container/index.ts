import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../component/header/header.component';
// import { AuthGuard } from './auth/auth.guard';

export const container = [
    LoginComponent,
    HomeComponent,
    HeaderComponent
];


export const routes: Routes = [
    {
        path: 'portal', component: HomeComponent,
         children: [
            // lazy Routing
            {
                path: '', loadChildren: ()=> import('../../features/portal/portal.module').then(m=>m.PortalModule)
            },
        ]
    },
    {
        path: '', component: LoginComponent
    },
];
