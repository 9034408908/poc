import { Routes } from '@angular/router';
import { ProducrComponent } from './producr/producr.component';
import { ProDetailsComponent } from './pro-details/pro-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputTextComponent } from 'src/app/ui-kit/input-text/input-text.component';
import { InputSelectComponent } from 'src/app/ui-kit/input-select/input-select.component';


export const container = [
    ProducrComponent,
    ProDetailsComponent,
    DashboardComponent,
    InputTextComponent,
    InputSelectComponent
];


export const routes: Routes = [
    { path: 'producr', component: ProducrComponent },
    { path: 'product-details', component: ProDetailsComponent },
    { path: 'home', component: DashboardComponent }

];