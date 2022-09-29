import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysItemComponent } from './days-item.component';

describe('DaysItemComponent', () => {
  let component: DaysItemComponent;
  let fixture: ComponentFixture<DaysItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaysItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
