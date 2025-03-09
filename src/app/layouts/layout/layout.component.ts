import { Component, HostBinding, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'money-tolia-layout',
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  private readonly layoutService = inject(LayoutService);

  private screenSize = false;

  @HostBinding('style.--visible-sidenav') get visible(): string {
    return this.screenSize ? 'none' : 'unset';
  }

  @HostBinding('style.--sidenav-container-width') get width(): string {
    return this.screenSize ? '0px' : '280px';
  }

  constructor() {
    this.layoutService.ltMd$.subscribe(response => {
      this.screenSize = response;
    })
  }

}
