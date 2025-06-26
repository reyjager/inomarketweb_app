import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { LayoutService } from './layout.service';
import { TitleService } from './title.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // Map view names to URL paths
  private viewToUrlMap: { [key: string]: string } = {
    'Dashboard': '/dashboard',
    'Analytics - Analytics 1': '/analytics/analytics1',
    'Analytics - Analytics 2': '/analytics/analytics2',
    'Analytics - Analytics 3': '/analytics/analytics3',
    'Analytics - Analytics 4': '/analytics/analytics4',
    'Reports - report 1': '/reports/report1',
    'Reports - report 2': '/reports/report2',
    'Reports - report 3': '/reports/report3',
    'Reports - report 4': '/reports/report4',
    'User - Users': '/user/users',
    'User - add User': '/user/add',
    'Settings': '/settings'
  };

  // Map URL paths to view names
  private urlToViewMap: { [key: string]: string } = {
    '/dashboard': 'Dashboard',
    '/analytics/analytics1': 'Analytics - Analytics 1',
    '/analytics/analytics2': 'Analytics - Analytics 2',
    '/analytics/analytics3': 'Analytics - Analytics 3',
    '/analytics/analytics4': 'Analytics - Analytics 4',
    '/reports/report1': 'Reports - report 1',
    '/reports/report2': 'Reports - report 2',
    '/reports/report3': 'Reports - report 3',
    '/reports/report4': 'Reports - report 4',
    '/user/users': 'User - Users',
    '/user/add': 'User - add User',
    '/settings': 'Settings'
  };

  constructor(
    private location: Location,
    private layoutService: LayoutService,
    private titleService: TitleService
  ) {
    // Listen for view changes and update URL
    this.layoutService.currentView$.subscribe(view => {
      const url = this.viewToUrlMap[view];
      if (url) {
        this.updateUrl(url);
      }
    });

    // Listen for URL changes (browser back/forward)
    this.location.onUrlChange((url) => {
      const view = this.urlToViewMap[url];
      if (view) {
        this.layoutService.setCurrentView(view);
        this.titleService.setTitle(view);
      }
    });
  }

  private updateUrl(url: string): void {
    this.location.go(url);
  }
}