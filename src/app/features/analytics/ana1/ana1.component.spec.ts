import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ana1Component } from './ana1.component';

describe('Ana1Component', () => {
  let component: Ana1Component;
  let fixture: ComponentFixture<Ana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ana1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
