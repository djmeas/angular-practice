import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { GetEmployees } from '../actions/employee/employee.actions';
import { EmployeeService } from '../services/employee/employee.service';
import { tap } from 'rxjs/operators';

export class EmployeeStateModel {
  list: Employee[];
  view: Employee;
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    list: [],
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

  // @Action(GetVideoGame)
  // getVideoGame(
  //   { getState, setState }: StateContext<VideoGameStateModel>,
  //   { id }
  // ) {
  //   console.log('videoGame.state getVideoGame()...');
  //   return this.videoGamesService.getVideoGame(id).pipe(
  //     tap(result => {
  //       console.log('setting state for video game detail: ', result);
  //       const state = getState();
  //       setState({
  //         ...state,
  //         viewDetail: result
  //       });
  //     })
  //   );
  // }
}
