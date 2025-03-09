import { Component, inject, input } from '@angular/core';
import { LoginService } from '@core/api';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'money-tolia-logout',
  imports: [
    SharedModule
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
  providers: [LoginService]
})
export class LogoutComponent {

  customClass = input<string>();

  private readonly loginService = inject(LoginService);

  onClickLogout() {
    this.loginService.logout();
  }

}
