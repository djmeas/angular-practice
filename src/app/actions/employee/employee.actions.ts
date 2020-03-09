import { Employee } from '../../model/employee.model';

export class GetEmployees {
  static readonly type = '[Employees] Get';

  constructor() {
    console.log('GetEmployees action...');
  }
}
