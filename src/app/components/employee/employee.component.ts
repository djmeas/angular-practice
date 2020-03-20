import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeState } from '../../state/employee.state';
import { Select, Store } from '@ngxs/store';
import { GetEmployees } from '../../actions/employee/employee.actions';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';
import { EmployeeMiniCardComponent } from '../employee-mini-card/employee-mini-card.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Select(EmployeeState.getAllEmployees) employees: Observable<Employee[]>;

  constructor(private store: Store) {}

  public employeesToCompare: Employee[] = [];
  public employeeQuickView: Employee;
  public displayInfoSidebar = false;

  public generateSkill(level: number) {
    const skillNames = [
      '',
      'Beginner',
      'Novice',
      'Intermediate',
      'Advanced',
      'Expert'
    ];
    return skillNames[level];
  }

  public compareEmployee($event): void {
    console.log('compareEmployee: ', $event);
    if (this.employeesToCompare.length < 2) {
      this.employeesToCompare.push($event);
    }
    console.log('this.employeesToCompare: ', this.employeesToCompare);
  }

  public quickView($event): void {
    console.log('quickView: ', $event);
    this.employeeQuickView = $event;
    this.displayInfoSidebar = true;
  }

  ngOnInit(): void {
    this.store.dispatch(new GetEmployees());
    window.scrollTo(0, 0);
  }
}
