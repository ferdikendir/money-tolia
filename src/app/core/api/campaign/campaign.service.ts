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
      score: 10,
      header: 'İkinci ürüne %50 indirim',
      description: 'Kırmızı etiketli ürünlerde seçeceğin ikinci ürüne %50 indirim kampanyası başlamıştır.',
      campaignDate: moment().subtract(1, 'days')
    },
    {
      id: 2,
      score: 30,
      header: 'Kadınlar gününe özel %20 indirim',
      description: '8 Mart Kadınlar gününe özel tüm ürünlerde %20 indirim kampanyası başlamıştır.',
      campaignDate: moment().subtract(5, 'days')
    },
    {
      id: 3,
      score: 20,
      header: 'Yeni sezona özel %30 indirim',
      description: 'Yeni sezon ürünlerde %30 indirim kampanyası başlamıştır.',
      campaignDate: moment().subtract(10, 'days')
    },
    {
      id: 4,
      score: 40,
      header: 'Ramazan ayına özel gıda sektöründe %50 çip para',
      description: 'Ramazan ayı boyunca yapacağın her 2000 ₺ ve üzeri harcamanıza %10, QR ödemelerine %12 çip para',
      campaignDate: moment().startOf('month')
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

    const index = this.campaigns.findIndex(c => c.id === campaign.id);

    this.campaigns[index] = campaign;

    localStorage.setItem('campaigns', JSON.stringify(this.campaigns));

    this.campaignSubject.next(this.campaigns);
  }

  deleteCampaign(id: number) {

    this.campaigns = this.campaigns.filter(c => c.id !== id);
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
