import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideToastr } from 'ngx-toastr';
import { provideStore } from '@ngrx/store';
import { appReducer } from '@core/store';
import { provideEffects } from '@ngrx/effects';
import { CampaignService } from '@core/api';

export const appConfig: ApplicationConfig = {
  providers: [
    CampaignService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(),
    provideAnimationsAsync(),
    provideEffects(),
    provideStore(appReducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    })
  ]
};
