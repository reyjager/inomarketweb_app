// settings.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  activeTab = 'account';

  // Mock user data
  user = {
    photoUrl: '',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    timezone: 'America/New_York',
    passwordLastChanged: new Date('2023-01-15'),
    twoFactorEnabled: false,
  };

  // Mock notifications data
  notifications = {
    email: {
      newsletter: true,
      productUpdates: true,
      securityAlerts: true,
    },
    push: {
      newMessages: true,
      reminders: false,
      mentions: true,
    },
    frequency: 'instant',
  };

  // Mock active sessions
  activeSessions = [
    {
      id: '1',
      device: 'MacBook Pro (Chrome)',
      location: 'New York, NY',
      ip: '192.168.1.100',
      lastActive: new Date(),
    },
    {
      id: '2',
      device: 'iPhone 13 (Safari)',
      location: 'Boston, MA',
      ip: '203.0.113.42',
      lastActive: new Date(Date.now() - 86400000), // 1 day ago
    },
  ];

  // Mock themes
  themes = [
    {
      id: 'light',
      name: 'Light',
      colors: {
        primary: '#3a6bff',
        secondary: '#f0f4ff',
        background: '#ffffff',
      },
    },
    {
      id: 'dark',
      name: 'Dark',
      colors: {
        primary: '#3a6bff',
        secondary: '#1e293b',
        background: '#0f172a',
      },
    },
    {
      id: 'blue',
      name: 'Ocean',
      colors: {
        primary: '#1e88e5',
        secondary: '#bbdefb',
        background: '#e3f2fd',
      },
    },
  ];
  selectedTheme = 'light';

  // Mock appearance settings
  appearance = {
    darkMode: false,
    fontSize: 16,
  };

  // Mock integrations
  integrations = [
    {
      id: 'google',
      name: 'Google',
      description: 'Connect your Google account',
      logo: 'assets/google-logo.png',
      connected: true,
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Get notifications in Slack',
      logo: 'assets/slack-logo.png',
      connected: false,
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Sync with your repositories',
      logo: 'assets/github-logo.png',
      connected: true,
    },
  ];

  // Timezone options
  timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
  ];

  setActiveTab(tab: string): void {
    console.log('Switching to tab:', tab);
    this.activeTab = tab;

  }

  openPasswordModal(): void {
    console.log('Open password change modal');
    alert('Password change modal would open here');
  }

  toggleTwoFactor(): void {
    this.user.twoFactorEnabled = !this.user.twoFactorEnabled;
    console.log('Two-factor auth toggled:', this.user.twoFactorEnabled);
  }

  endSession(sessionId: string): void {
    this.activeSessions = this.activeSessions.filter((s) => s.id !== sessionId);
    console.log('Ended session:', sessionId);
  }

  selectTheme(themeId: string): void {
    this.selectedTheme = themeId;
    console.log('Selected theme:', themeId);
  }

  increaseFontSize(): void {
    this.appearance.fontSize = Math.min(this.appearance.fontSize + 1, 24);
  }

  decreaseFontSize(): void {
    this.appearance.fontSize = Math.max(this.appearance.fontSize - 1, 12);
  }

  connect(integrationId: string): void {
    const integration = this.integrations.find((i) => i.id === integrationId);
    if (integration) {
      integration.connected = true;
      console.log('Connected:', integrationId);
    }
  }

  disconnect(integrationId: string): void {
    const integration = this.integrations.find((i) => i.id === integrationId);
    if (integration) {
      integration.connected = false;
      console.log('Disconnected:', integrationId);
    }
  }

  // For photo upload simulation
  onPhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.photoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
