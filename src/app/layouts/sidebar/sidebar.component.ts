import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-sidebar',
  imports: [ProfileComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', active: true },
    { name: 'Analytics', active: false },
    { name: 'Reports', active: false },
    { name: 'Settings', active: false }
  ];
}