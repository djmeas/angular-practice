import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http: HttpClient) {
    console.log('Service: Making get request...');
  }

  getEmployees() {
    return this.http.get<Employee[]>('http://localhost:3000/employees/');
  }

  getEmployee(id: number) {
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
  }

  getEmployeesByRole(keyword: string) {
    return this.http.get<Employee[]>(
      `http://localhost:3000/employees?q=${keyword}`
    );
  }
}
