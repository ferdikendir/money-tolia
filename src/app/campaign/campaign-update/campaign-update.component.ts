import { Component, inject } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CampaignAddComponent } from "../campaign-add/campaign-add.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Campaign } from '@core/api';

@Component({
  selector: 'money-tolia-campaign-update',
  imports: [
    SharedModule,
    CampaignAddComponent
  ],
  templateUrl: './campaign-update.component.html',
  styleUrl: './campaign-update.component.scss'
})
export class CampaignUpdateComponent {

  public campaign = inject<Campaign>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<CampaignUpdateComponent>);

  closeDialog() {
    this.dialogRef.close();
  }

}
