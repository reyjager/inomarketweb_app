import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsLoaderService } from './services/js-loader.service';
import { BrandHeaderComponent } from './layouts/brand-header/brand-header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainContentComponent } from './layouts/main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [
    BrandHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './layouts/brand-header/brand-header.component.scss',
    './layouts/navbar/navbar.component.scss',
    './layouts/sidebar/sidebar.component.scss',
    './layouts/main-content/main-content.component.scss',
  ]
})
export class AppComponent implements OnInit {
  title = 'inomarketweb';
  isCollapsed = false;

  ngOnInit(): void {
    const toggleBtn = document.getElementById('toggleBtn');
    toggleBtn?.addEventListener('click', () => {
      this.toggleLayout();
    });
  }

  toggleLayout(): void {
    this.isCollapsed = !this.isCollapsed;

    const grid = document.getElementById('grid');
    const brand = document.getElementById('brand');
    const sidebar = document.getElementById('sidebar');

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
