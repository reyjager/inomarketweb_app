import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly baseTitle = 'InoMarket';

  constructor(private titleService: Title) {}

  /**
   * Sets the document title
   * @param title - The page-specific title to append to the base title
   */
  setTitle(title: string): void {
    if (title) {
      this.titleService.setTitle(`${this.baseTitle} - ${title}`);
    } else {
      this.titleService.setTitle(this.baseTitle);
    }
  }
}