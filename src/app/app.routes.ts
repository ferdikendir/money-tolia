import { Routes } from '@angular/router';
import { authGuard, guestGuard } from '@core/auth/guard';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule),
        canMatch: [guestGuard],
    }
];
