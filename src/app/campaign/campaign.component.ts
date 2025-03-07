import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'money-tolia-campaign',
  imports: [SharedModule],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {

  constructor(private toastr: ToastrService) {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
