import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
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