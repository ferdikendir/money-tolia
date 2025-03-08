import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Campaign, CampaignService } from '@core/api';
@Component({
  selector: 'money-tolia-campaign-add',
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './campaign-add.component.html',
  styleUrl: './campaign-add.component.scss'
})
export class CampaignAddComponent {

  private readonly toastr = inject(ToastrService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly campaignService = inject(CampaignService);

  campaignForm = this.formBuilder.group({
    header: ['', [Validators.required]],
    description: ['', [Validators.required]],
    score: [0],
    campaignDate: [moment()],
  });

  constructor() {
  }

  addCampaign() {

    this.campaignForm.markAllAsTouched();

    if (this.campaignForm.invalid) {
      return;
    }

    this.toastr.success('The campaign has been added successfully.', 'Campaign Added');
    this.campaignService.addCampaign(this.campaignForm.value as Campaign);
  }

}
