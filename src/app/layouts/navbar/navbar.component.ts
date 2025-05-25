import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() userName = 'Admin';
  @Input() notificationCount = 0;
  isCollapsed = false;

  @ViewChild('brand', { read: ElementRef }) brandElement!: ElementRef;
  @ViewChild('profile', { read: ElementRef }) profileElement!: ElementRef;
  @ViewChild('sidebar', { read: ElementRef }) sidebarElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleLayout(): void {
    this.isCollapsed = !this.isCollapsed;

    // Toggle grid layout
    const grid = document.getElementById('grid');
    if (grid) {
      this.renderer[this.isCollapsed ? 'addClass' : 'removeClass'](
        grid,
        'grid-area-collapsed'
      );
      this.renderer[this.isCollapsed ? 'removeClass' : 'addClass'](
        grid,
        'grid-area'
      );
    }

    // Toggle child components
    if (this.isCollapsed) {
      // When collapsing: hide components
      this.toggleClass(this.brandElement, 'brand');
      this.toggleClass(this.profileElement, 'profile');
      this.toggleClass(this.sidebarElement, 'sidebar');
    } else {
      // When expanding: show components
      this.toggleClass(this.brandElement, 'brand-hide');
      this.toggleClass(this.profileElement, 'profile-hide');
      this.toggleClass(this.sidebarElement, 'sidebar-hide');
    }
  }

  private toggleClass(elementRef: ElementRef, className: string): void {
    const element = document.querySelector(`.${className}`);

      const isHideClass = className.includes('-hide');

      if (isHideClass) {
        // Showing the element (remove -hide, add base class)
        const baseClass = className.replace('-hide', '');
        this.renderer.removeClass(element, className);
        this.renderer.addClass(element, baseClass);
      } else {
        // Hiding the element (remove base class, add -hide)
        this.renderer.removeClass(element, className);
        this.renderer.addClass(element, `${className}-hide`);
      }

  }
}
