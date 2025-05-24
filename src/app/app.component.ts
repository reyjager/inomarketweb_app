import { Component } from '@angular/core';
import { BrandHeaderComponent } from './layouts/brand/brand.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainContentComponent } from './layouts/main-content/main-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    CommonModule,
    BrandHeaderComponent
],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './layouts/brand/brand.component.scss',
    './layouts/navbar/navbar.component.scss',
    './layouts/sidebar/sidebar.component.scss',
    './layouts/main-content/main-content.component.scss',
  ]
})
export class AppComponent   {
  title = 'inomarketweb';

toggleTheme(isDark: boolean) {
  const body = document.body;
  if (isDark) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
}

}
