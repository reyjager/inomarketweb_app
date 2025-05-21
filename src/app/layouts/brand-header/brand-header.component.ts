import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.scss']
})
export class BrandHeaderComponent {
  @Input() brandName = 'My rey';
}
