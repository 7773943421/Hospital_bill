import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBillsComponent } from './hospital-bills.component';

describe('HospitalBillsComponent', () => {
  let component: HospitalBillsComponent;
  let fixture: ComponentFixture<HospitalBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
