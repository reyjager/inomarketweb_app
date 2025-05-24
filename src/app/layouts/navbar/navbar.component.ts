import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() userName = 'Admin';
  @Input() notificationCount = 0;
  isCollapsed = false;

  toggleLayout(): void {
    this.isCollapsed = !this.isCollapsed;

    const grid = document.getElementById('grid');
    const brand = document.getElementById('brand');
    const sidebar = document.getElementById('sidebar');
    console.log(' is collapsed? ' + this.isCollapsed);


    if (this.isCollapsed) {
      brand?.classList.remove('brand-area');
      sidebar?.classList.remove('sidebar-area');
      grid?.classList.remove('grid-area');

      brand?.classList.add('brand-area-none');
      sidebar?.classList.add('sidebar-area-none');
      grid?.classList.add('grid-area-none');
    } else {
      brand?.classList.remove('brand-area-none');
      sidebar?.classList.remove('sidebar-area-none');
      grid?.classList.remove('grid-area-none');

      brand?.classList.add('brand-area');
      sidebar?.classList.add('sidebar-area');
      grid?.classList.add('grid-area');
    }
  }
}
