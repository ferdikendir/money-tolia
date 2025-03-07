import { Routes } from '@angular/router';
import { authGuard, guestGuard } from '@core/auth/guard';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignAddComponent } from './campaign/campaign-add/campaign-add.component';

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
        children: [
            {
                path: '',
                redirectTo: 'campaigns',
                pathMatch: 'full'
            },
            {
                path: 'campaigns',
                component: CampaignComponent,
            },
            {
                path: 'campaigns/new',
                component: CampaignAddComponent
            }
        ]
    }
];
