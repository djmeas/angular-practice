import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllocationDetailsComponent } from './project-allocation-details.component';

describe('ProjectAllocationDetailsComponent', () => {
  let component: ProjectAllocationDetailsComponent;
  let fixture: ComponentFixture<ProjectAllocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAllocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAllocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
