import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../component/header/header.component';

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
                path: '', loadChildren: '../../features/portal/portal.module#PortalModule'
            },
        ]
    },
    {
        path: '', component: LoginComponent
    },
];
