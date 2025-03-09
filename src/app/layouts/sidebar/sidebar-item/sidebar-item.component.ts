import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationItem } from '@core/api/navigation/navigation.model';

@Component({
  selector: 'money-tolia-sidebar-item',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {

  item = input.required<NavigationItem>();

}
