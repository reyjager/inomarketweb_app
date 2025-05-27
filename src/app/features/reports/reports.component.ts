// reports.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  activeTab: string = 'sales';
  dateRange = { start: '2023-01-01', end: '2023-12-31' };

  salesData = [
    {
      id: '#1001',
      date: '2023-10-15',
      customer: 'Acme Corp',
      amount: 1250,
      status: 'Completed',
    },
    {
      id: '#1002',
      date: '2023-10-16',
      customer: 'Globex',
      amount: 890,
      status: 'Pending',
    },
    {
      id: '#1003',
      date: '2023-10-17',
      customer: 'Soylent',
      amount: 2450,
      status: 'Completed',
    },
    {
      id: '#1004',
      date: '2023-10-18',
      customer: 'Initech',
      amount: 540,
      status: 'Cancelled',
    },
  ];

  userActivity = [
    {
      user: 'john.doe@example.com',
      login: '2023-10-18 08:42',
      lastAction: 'Viewed Dashboard',
      ip: '192.168.1.1',
    },
    {
      user: 'jane.smith@example.com',
      login: '2023-10-18 09:15',
      lastAction: 'Generated Report',
      ip: '203.0.113.42',
    },
    {
      user: 'mike.johnson@example.com',
      login: '2023-10-18 10:03',
      lastAction: 'Updated Settings',
      ip: '198.51.100.10',
    },
  ];

  systemMetrics = {
    uptime: '99.98%',
    responseTime: '142ms',
    errors: '0.2%',
    activeUsers: '247',
  };

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  exportReport(format: string): void {
    console.log(`Exporting ${this.activeTab} report as ${format}`);
    // Implement actual export logic here
  }
}
