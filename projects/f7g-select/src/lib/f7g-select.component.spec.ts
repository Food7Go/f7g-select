import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F7gSelectComponent } from './f7g-select.component';

describe('F7gSelectComponent', () => {
  let component: F7gSelectComponent;
  let fixture: ComponentFixture<F7gSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F7gSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F7gSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
