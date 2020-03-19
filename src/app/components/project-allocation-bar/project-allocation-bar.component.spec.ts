import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllocationBarComponent } from './project-allocation-bar.component';

describe('ProjectAllocationBarComponent', () => {
  let component: ProjectAllocationBarComponent;
  let fixture: ComponentFixture<ProjectAllocationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAllocationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAllocationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
