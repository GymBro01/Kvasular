import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: 'login',
        loadComponent: ()=> import('./features/authentication/login/login.component').then(m=>m.LoginComponent)
    }
];
