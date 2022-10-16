import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempTimerComponent } from './temp-timer.component';

describe('TempTimerComponent', () => {
  let component: TempTimerComponent;
  let fixture: ComponentFixture<TempTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
