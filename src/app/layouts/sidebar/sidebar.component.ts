import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

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

  constructor(private layoutService: LayoutService) {}

  selected(selectedItem: any): void {
    // Update active state locally
    this.menuItems.forEach((item) => {
      item.active = item === selectedItem;
    });

    // Notify the service about the change
    this.layoutService.setCurrentView(selectedItem.name);
  }
}

