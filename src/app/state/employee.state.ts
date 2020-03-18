import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import {
  GetEmployees,
  GetEmployee,
  GetEmployeesByRole
} from '../actions/employee/employee.actions';
import { EmployeeService } from '../services/employee/employee.service';
import { tap } from 'rxjs/operators';

export class EmployeeStateModel {
  list: Employee[];
  byRole: Employee[];
  view: Employee;
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    list: [],
    byRole: [],
    view: null
  }
})
@Injectable()
export class EmployeeState {
  constructor(private employeeService: EmployeeService) {
    console.log('employee.state reached!');
  }

  @Selector()
  static getAllEmployees(state: EmployeeStateModel) {
    return state.list;
  }

  @Selector()
  static getEmployee(state: EmployeeStateModel) {
    return state.view;
  }

  @Selector()
  static getEmployeesByRole(state: EmployeeStateModel) {
    return state.byRole;
  }

  @Action(GetEmployees)
  getEmployees({ getState, setState }: StateContext<EmployeeStateModel>) {
    return this.employeeService.getEmployees().pipe(
      tap(result => {
        console.log('setting state for employees: ', result);
        const state = getState();
        setState({
          ...state,
          list: result
        });
      })
    );
  }

  @Action(GetEmployee)
  getEmployee(
    { getState, setState }: StateContext<EmployeeStateModel>,
    { id }
  ) {
    return this.employeeService.getEmployee(id).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          view: result
        });
      })
    );
  }

  @Action(GetEmployeesByRole)
  getEmployeesByRole(
    { getState, setState }: StateContext<EmployeeStateModel>,
    { keyword }
  ) {
    return this.employeeService.getEmployeesByRole(keyword).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          byRole: result
        });
      })
    );
  }
}
