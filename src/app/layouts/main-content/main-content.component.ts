import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../../features/dashboard/dashboard.component";
import { AnalyticsComponent } from "../../features/analytics/analytics.component";
import { ReportsComponent } from "../../features/reports/reports.component";
import { SettingsComponent } from "../../features/settings/settings.component";

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, DashboardComponent, AnalyticsComponent, ReportsComponent, SettingsComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  encapsulation: ViewEncapsulation.None, // Optional
})
export class MainContentComponent implements OnInit {
  currentView: string = 'Dashboard';

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
}
