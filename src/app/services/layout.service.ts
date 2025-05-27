// src/app/services/layout.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes it available app-wide
})
export class LayoutService {
  // BehaviorSubject remembers the last value (initial 'Dashboard')
  private currentViewSubject = new BehaviorSubject<string>('Dashboard');

  // Expose as observable to prevent external components from emitting
  public currentView$ = this.currentViewSubject.asObservable();

  // Method to update the current view
  setCurrentView(view: string): void {
    this.currentViewSubject.next(view);
  }
}
