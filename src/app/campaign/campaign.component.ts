import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Campaign, CampaignService } from '@core/api';
import { MomentFormatPipe } from '../shared/pipes/moment.pipe';

@Component({
  selector: 'money-tolia-campaign',
  imports: [SharedModule, MomentFormatPipe],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {

  private readonly campaignService = inject(CampaignService);

  campaigns: Campaign[] = [];

  constructor() {

    this.campaignService.campaigns$.subscribe(campaigns => this.campaigns = campaigns);
  }

}
