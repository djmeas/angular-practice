import { Component, OnInit } from '@angular/core';
import { EmployeeState } from '../../state/employee.state';
import { Select, Store } from '@ngxs/store';
import { GetEmployees } from '../../actions/employee/employee.actions';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(EmployeeState.getAllEmployees) employees: Observable<Employee[]>;

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

  ngOnInit(): void {
    this.store.dispatch(new GetEmployees());
  }
}
