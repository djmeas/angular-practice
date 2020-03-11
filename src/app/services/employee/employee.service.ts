import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  getEmployees() {
    console.log('Service: Making get request...');
    return this.http.get<Employee[]>('http://localhost:3000/employees/');
  }

  getEmployee(id: number) {
    console.log('Service: Making get request...');
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
  }
}
