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
export class AppComponent implements OnInit { // Implement OnInit
  title = 'inomarketweb';

  constructor(private jsLoaderService: JsLoaderService) { } // Inject the service

  ngOnInit(): void {
    // The constructor of JsLoaderService will run when it's injected.
    // No explicit call needed here, but injecting ensures it's initialized.
  }
}
