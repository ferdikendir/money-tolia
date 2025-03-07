import { Routes } from '@angular/router';
import { authGuard, guestGuard } from '@core/auth/guard';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule),
        canMatch: [guestGuard],
    },
    {
        path: '',
        loadComponent: () => import('./layouts/layout/layout.component').then(m => m.LayoutComponent),
        canMatch: [authGuard],
    }
];
