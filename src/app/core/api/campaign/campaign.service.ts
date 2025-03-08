import { DestroyRef, Injectable, inject } from "@angular/core";
import { Campaign } from "@core/api";
import moment from "moment";
import { BehaviorSubject } from "rxjs";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from "@ngrx/store";
import { SetCampaign } from "@core/store/campaign";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  campaigns: Campaign[] = [
    {
      id: 1,
      score: 1,
      header: 'Campaign 1',
      description: 'Description for Campaign 1',
      campaignDate: moment().subtract(1, 'days')
    },
    {
      id: 2,
      score: 2,
      header: 'Campaign 2',
      description: 'Description for Campaign 2',
      campaignDate: moment().subtract(5, 'days')
    },
    {
      id: 3,
      score: 3,
      header: 'Campaign 3',
      description: 'Description for Campaign 3',
      campaignDate: moment().subtract(10, 'days')
    }
  ];

  private campaignSubject = new BehaviorSubject<Campaign[]>(this.getDefaultCampaigns());
  campaigns$ = this.campaignSubject.asObservable();

  private readonly store = inject(Store);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.campaigns$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(campaigns => this.store.dispatch(new SetCampaign(campaigns)));
  }

  addCampaign(campaign: Campaign) {
    this.campaigns.push({
      ...campaign,
      id: this.campaigns.length + 1
    });
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
    this.campaignSubject.next(this.campaigns);
  }

  updateCampaign(campaign: Campaign) {
    console.log('updateCampaign', campaign);
    const index = this.campaigns.findIndex(c => c.id === campaign.id);

    this.campaigns[index] = campaign;

    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));

    this.campaignSubject.next(this.campaigns);
  }

  private getDefaultCampaigns(): Campaign[] {
    const campaigns = localStorage.getItem('campaigns');

    if (!!campaigns) {
      this.campaigns = JSON.parse(campaigns);
      return JSON.parse(campaigns);
    } else {
      localStorage.setItem('campaigns', JSON.stringify(this.campaigns));
      return this.campaigns;
    }
  }
}
