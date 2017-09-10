import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'countries', pathMatch: 'full'},
        { path: 'countries', loadChildren: '../countries/countries.module#CountriesModule' }
    ]}
];

export const ROUTES = RouterModule.forChild(routes);