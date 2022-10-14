import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalLayoutComponent } from './journal-layout.component';

describe('JournalLayoutComponent', () => {
  let component: JournalLayoutComponent;
  let fixture: ComponentFixture<JournalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
