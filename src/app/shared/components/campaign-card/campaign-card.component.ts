import { Component, inject, input } from "@angular/core";
import { Campaign, CampaignService } from "@core/api";
import { SharedModule } from "../../shared.module";
import { MomentFormatPipe } from "../../pipes/moment.pipe";

@Component({
  selector: "money-tolia-campaign-card",
  templateUrl: "./campaign-card.component.html",
  styleUrls: ["./campaign-card.component.scss"],
  imports: [
    SharedModule,
    MomentFormatPipe
  ]
})
export class CampaignCardComponent {

  campaign = input.required<Campaign>();

  private readonly campaignService = inject(CampaignService);

  constructor() { }

  increaseCampaignScore() {

    this.campaignService.updateCampaign({
      ...this.campaign(),
      score: ++this.campaign().score
    });
  }

  decreaseCampaignScore() {

    this.campaignService.updateCampaign({
      ...this.campaign(),
      score: --this.campaign().score
    });

  }
}
