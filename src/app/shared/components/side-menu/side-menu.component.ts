import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'money-tolia-side-menu',
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

}
