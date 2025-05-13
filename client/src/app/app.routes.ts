import { Routes } from '@angular/router';
import { RegistrationComponent } from './features/authentication/registration/registration.component';
export const routes: Routes = 
[
    {
        path: 'login',
        loadComponent: ()=> import('./features/authentication/login/login.component').then(m=>m.LoginComponent)
    },
    {
        path: 'registration',
        loadComponent: ()=> import('./features/authentication/registration/registration.component').then(m=>m.RegistrationComponent)
    }
];
