import { Component, inject, input, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Campaign, CampaignService } from '@core/api';
import { ActivatedRoute, Router } from '@angular/router';
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

  campaign = input<Campaign>();

  onUpdatedCampaign = output<boolean>();

  private readonly toastr = inject(ToastrService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly campaignService = inject(CampaignService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  campaignForm = this.formBuilder.group({
    header: ['', [Validators.required]],
    description: ['', [Validators.required]],
    score: [0],
    campaignDate: [moment()],
  });

  constructor() {
  }

  ngAfterViewInit(): void {

    if (this.isUpdate) {
      this.campaignForm.patchValue({
        header: this.campaign()?.header,
        description: this.campaign()?.description,
        score: this.campaign()?.score,
        campaignDate: moment(this.campaign()?.campaignDate),
      });
    }
  }

  get isUpdate(): boolean {
    return !!this.campaign();
  }

  onSubmit() {

    this.campaignForm.markAllAsTouched();

    if (this.campaignForm.invalid) {
      return;
    }

    if (this.isUpdate) {
      this.updateCampaign();
    } else {
      this.addCampaign();
    }
  }

  private addCampaign() {

    this.toastr.success('The campaign has been added successfully.', 'Campaign Added');
    this.campaignService.addCampaign(this.campaignForm.value as Campaign);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private updateCampaign() {

    this.toastr.success('The campaign has been updated successfully.', 'Campaign Added');
    this.campaignService.updateCampaign({
      ...this.campaignForm.value,
      id: this.campaign()?.id
    } as Campaign);

    this.onUpdatedCampaign.emit(true);

  }

}
