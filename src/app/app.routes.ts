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
        redirectTo: 'campaign-list',
        pathMatch: 'full'
      },
      {
        path: 'campaign-list',
        component: CampaignComponent,
      },
      {
        path: 'campaign-add',
        component: CampaignAddComponent
      }
    ]
  }
];
