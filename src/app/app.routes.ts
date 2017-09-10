import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full'},
  { path: 'countries', loadChildren: './components/countries/countries.module#CountriesModule'}
];