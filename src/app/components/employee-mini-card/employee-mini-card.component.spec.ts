import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMiniCardComponent } from './employee-mini-card.component';

describe('EmployeeMiniCardComponent', () => {
  let component: EmployeeMiniCardComponent;
  let fixture: ComponentFixture<EmployeeMiniCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMiniCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
