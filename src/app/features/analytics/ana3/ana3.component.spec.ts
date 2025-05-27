import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ana3Component } from './ana3.component';

describe('Ana3Component', () => {
  let component: Ana3Component;
  let fixture: ComponentFixture<Ana3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ana3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ana3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
