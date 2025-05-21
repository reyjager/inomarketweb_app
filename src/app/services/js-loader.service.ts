import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsLoaderService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeSidebar();
  }

  private initializeSidebar(): void {
    this.renderer.listen('window', 'DOMContentLoaded', () => {
      
      const toggleBtn = document.getElementById('toggleBtn');

      const sidebar = document.getElementById('sidebar');
      const brand = document.getElementById('brand');

      if (toggleBtn && sidebar && brand) {
        this.renderer.listen(toggleBtn, 'click', () => {

          if (window.innerWidth <= 768) {
            // Mobile view: Toggle 'active' class for both elements
            const hasActive = sidebar.classList.contains('active');
            if (hasActive) {
              this.renderer.removeClass(sidebar, 'active');
              this.renderer.removeClass(brand, 'active');
              console.log('Mobile: Removed active class from both elements');
            } else {
              this.renderer.addClass(sidebar, 'active');
              this.renderer.addClass(brand, 'active');
              console.log('Mobile: Added active class to both elements');
            }
          } else {
            // Desktop view: Toggle between expanded and shrunk states
            const isShrunk = sidebar.classList.contains('shrink');

            if (isShrunk) {
              // Expand both elements
              this.renderer.removeClass(sidebar, 'shrink');
              this.renderer.removeClass(brand, 'shrink');
              this.renderer.addClass(sidebar, 'sidebar-area');
              this.renderer.addClass(brand, 'brand-area');
              localStorage.setItem('sidebarState', 'expanded');
              console.log('Desktop: Expanded both elements');
            } else {
              // Shrink both elements
              this.renderer.removeClass(sidebar, 'sidebar-area');
              this.renderer.removeClass(brand, 'brand-area');
              this.renderer.addClass(sidebar, 'shrink');
              this.renderer.addClass(brand, 'shrink');
              localStorage.setItem('sidebarState', 'shrink');
              console.log('Desktop: Shrunk both elements');
            }
          }
          console.log('Sidebar classes:', sidebar.classList.value);
          console.log('Brand classes:', brand.classList.value);
        });

        // Initial state check on page load
        this.applySidebarState(sidebar, brand);
      }
    });

    // Listen for window resize events
    this.renderer.listen('window', 'resize', () => {
      const sidebar = document.getElementById('sidebar');
      const brand = document.getElementById('brand');
      if (sidebar && brand) {
        this.applySidebarState(sidebar, brand);
      }
    });
  }

  private applySidebarState(sidebar: HTMLElement, brand: HTMLElement): void {
    console.log('Applying sidebar state based on window size...');
    if (window.innerWidth <= 768) {
      // Mobile view: Reset both elements
      this.renderer.removeClass(sidebar, 'sidebar-area');
      this.renderer.removeClass(sidebar, 'shrink');
      this.renderer.removeClass(sidebar, 'active');

      this.renderer.removeClass(brand, 'brand-area');
      this.renderer.removeClass(brand, 'shrink');
      this.renderer.removeClass(brand, 'active');
      console.log('Mobile view: Reset both elements');
    } else {
      // Desktop view: Apply saved state to both elements
      const savedState = localStorage.getItem('sidebarState');

      if (savedState === 'shrink') {
        this.renderer.removeClass(sidebar, 'sidebar-area');
        this.renderer.removeClass(brand, 'brand-area');
        this.renderer.addClass(sidebar, 'shrink');
        this.renderer.addClass(brand, 'shrink');
        console.log('Desktop view: Applied shrink state to both elements');
      } else {
        this.renderer.removeClass(sidebar, 'shrink');
        this.renderer.removeClass(brand, 'shrink');
        this.renderer.addClass(sidebar, 'sidebar-area');
        this.renderer.addClass(brand, 'brand-area');
        console.log('Desktop view: Applied expanded state to both elements');
      }
    }
  }
}
