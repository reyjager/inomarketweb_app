import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    {
      name: 'Analytics',
      icon: 'bar_chart',
      active: false,
      expanded: false,
      subItems: [
        { name: 'Analytics 1', active: false },
        { name: 'Analytics 2', active: false },
        { name: 'Analytics 3', active: false },
        { name: 'Analytics 4', active: false },
      ],
    },
    {
      name: 'Reports',
      icon: 'assignment',
      active: false,
      expanded: false,
      subItems: [
        { name: 'report 1', active: false },
        { name: 'report 2', active: false },
        { name: 'report 3', active: false },
        { name: 'report 4', active: false },
      ],
    },
    { name: 'Settings', icon: 'settings', active: false },
  ];

  constructor(private layoutService: LayoutService) {}

  selected(selectedItem: any): void {
    // Close all submenus when selecting a main menu item without subitems

    console.log('Selected Item:', selectedItem.name);

    this.menuItems.forEach((item) => {
      item.expanded = false;
      item.active = item === selectedItem;
      if (item.subItems) {
        item.subItems.forEach((subItem) => (subItem.active = false));
      }
    });

    this.layoutService.setCurrentView(selectedItem.name);
  }

  toggleSubMenu(menuItem: any): void {
    if (menuItem.subItems) {
      // Close all other submenus first
      this.menuItems.forEach((item) => {
        if (item !== menuItem) {
          item.expanded = false;
        }
      });

      // Toggle the current submenu
      menuItem.expanded = !menuItem.expanded;

      // If we're closing the submenu, also deactivate its items
      if (!menuItem.expanded && menuItem.subItems) {
        menuItem.subItems.forEach((subItem: { active: boolean; }) => (subItem.active = false));
      }
    } else {
      this.selected(menuItem);
    }
  }

  selectSubItem(menuItem: any, subItem: any): void {
    console.log('Selected Item:', subItem.name);
    // Close all other submenus
    this.menuItems.forEach((item) => {
      item.expanded = false;
      item.active = false;
      if (item.subItems) {
        item.subItems.forEach((si) => (si.active = false));
      }
    });

    // Open and activate the selected items
    menuItem.expanded = true;
    menuItem.active = true;
    subItem.active = true;

    this.layoutService.setCurrentView(`${menuItem.name} - ${subItem.name}`);
  }
}
