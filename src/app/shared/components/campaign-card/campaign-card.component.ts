import { Component, inject, input } from "@angular/core";
import { Campaign, CampaignService } from "@core/api";
import { SharedModule } from "../../shared.module";
import { MomentFormatPipe } from "../../pipes/moment.pipe";
import {
  MatDialog
} from '@angular/material/dialog';
import { CampaignAddComponent } from "src/app/campaign/campaign-add/campaign-add.component";
import { CampaignUpdateComponent } from "src/app/campaign/campaign-update/campaign-update.component";

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

  private readonly dialog = inject(MatDialog);

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

  updateCampaign() {

    this.dialog.open(CampaignUpdateComponent, {
      data: this.campaign()
    });

  }

  deleteCampaign() {

    this.campaignService.deleteCampaign(this.campaign().id);

  }

}
