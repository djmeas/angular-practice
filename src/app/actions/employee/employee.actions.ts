import { Employee } from '../../model/employee.model';

export class GetEmployees {
  static readonly type = '[Employees] Get All';

  constructor() {
    console.log('GetEmployees action...');
  }
}

export class GetEmployee {
  static readonly type = '[Employees] Get One';

  constructor(public id: number) {
    console.log('GetEmployee action');
  }
}
