import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogValueIndicatorComponent } from './dialog-value-indicator.component';

describe('DialogValueIndicatorComponent', () => {
  let component: DialogValueIndicatorComponent;
  let fixture: ComponentFixture<DialogValueIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogValueIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogValueIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
