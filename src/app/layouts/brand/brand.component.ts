import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand',
  imports: [CommonModule],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandHeaderComponent {
  @Input() brandName = 'My rey';
  isCollapsed = false;


  toggleLayout() {
    this.isCollapsed = !this.isCollapsed;
  }
}
