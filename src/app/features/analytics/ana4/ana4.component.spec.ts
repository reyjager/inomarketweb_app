import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ana4Component } from './ana4.component';

describe('Ana4Component', () => {
  let component: Ana4Component;
  let fixture: ComponentFixture<Ana4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ana4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ana4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
