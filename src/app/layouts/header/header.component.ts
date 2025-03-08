import { Component, inject } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { SideMenuComponent } from 'src/app/shared/components/side-menu/side-menu.component';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'money-tolia-header',
  imports: [
    SharedModule,
    SideMenuComponent,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private readonly layoutService = inject(LayoutService);

  ltMd$ = this.layoutService.ltMd$;

}
