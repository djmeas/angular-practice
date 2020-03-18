import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeState } from '../../state/employee.state';
import { Select, Store } from '@ngxs/store';
import { GetEmployeesByRole } from '../../actions/employee/employee.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.scss']
})
export class SkillViewComponent implements OnInit {
  @Select(EmployeeState.getEmployeesByRole) employee$: Observable<Employee[]>;

  public employees: Employee[] = [];

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.store.dispatch(new GetEmployeesByRole(params.id));
      this.employee$.subscribe(result => {
        console.log(result);
        this.employees = result;
      });
    });
  }
}
