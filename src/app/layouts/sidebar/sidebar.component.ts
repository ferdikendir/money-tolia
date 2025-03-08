import { Component } from '@angular/core';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { NavigationItem } from '@core/api/navigation/navigation.model';

@Component({
  selector: 'money-tolia-sidebar',
  imports: [
    SidebarItemComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  navigationItems: NavigationItem[] = [
    {
      label: 'Campaign',
      type: 'header',
      children: [
        {
          label: 'Campaign List',
          route: '/campaign-list',
          type: 'link'
        },
        {
          label: 'Create Campaign',
          route: '/campaign-add',
          type: 'link'
        }
      ]
    }
  ];

}
