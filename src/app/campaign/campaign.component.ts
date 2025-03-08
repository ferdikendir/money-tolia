import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Campaign, CampaignService } from '@core/api';
import { Store } from '@ngrx/store';
import { getCampaigns } from '@core/store/campaign';
import { CampaignCardComponent } from '../shared/components/campaign-card/campaign-card.component';

@Component({
  selector: 'money-tolia-campaign',
  imports: [
    SharedModule,
    CampaignCardComponent
  ],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {

  private readonly campaignService = inject(CampaignService);

  private readonly store = inject(Store);

  campaigns: Campaign[] = [];

  constructor() {

    this.store.select(getCampaigns).subscribe(campaigns => this.campaigns = campaigns);
  }

}
