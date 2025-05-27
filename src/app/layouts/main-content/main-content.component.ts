import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../../features/dashboard/dashboard.component";
import { AnalyticsComponent } from "../../features/analytics/analytics.component";
import { ReportsComponent } from "../../features/reports/reports.component";
import { SettingsComponent } from "../../features/settings/settings.component";
import { Ana1Component } from "../../features/analytics/ana1/ana1.component";
import { Ana3Component } from "../../features/analytics/ana3/ana3.component";
import { Ana4Component } from "../../features/analytics/ana4/ana4.component";
import { Ana2Component } from "../../features/analytics/ana2/ana2.component";
import { Report1Component } from "../../features/reports/report1/report1.component";
import { Report2Component } from "../../features/reports/report2/report2.component";
import { Report3Component } from "../../features/reports/report3/report3.component";
import { Report4Component } from "../../features/reports/report4/report4.component";

@Component({
  selector: 'app-main-content',
  imports: [
    CommonModule,
    DashboardComponent,
    AnalyticsComponent,
    ReportsComponent,
    SettingsComponent,
    Ana1Component,
    Ana3Component,
    Ana4Component,
    Ana2Component,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component
],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  encapsulation: ViewEncapsulation.None, // Optional
})
export class MainContentComponent implements OnInit {
  currentView: string = 'Dashboard';

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.currentView$.subscribe((view) => {
      console.log('Current View:', view);
      this.currentView = view;
    });
  }
}
