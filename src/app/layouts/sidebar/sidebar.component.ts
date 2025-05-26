import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  // standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'Analytics', icon: 'bar_chart', active: false },
    { name: 'Reports', icon: 'assignment', active: false },
    { name: 'Settings', icon: 'settings', active: false },
  ];

  selected(selectedItem: any): void {
    this.menuItems = this.menuItems.map((item) => ({
      ...item,
      active: item === selectedItem,
    }));
  }
}
