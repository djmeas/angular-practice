import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeState } from '../../state/employee.state';
import { Select, Store } from '@ngxs/store';
import { GetEmployee } from '../../actions/employee/employee.actions';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit, OnDestroy {
  @Select(EmployeeState.getEmployee) employee$: Observable<Employee>;

  public employee = null;

  public view = '';

  // options
  public gradient = false;
  public animations = true;

  public colorScheme = {
    domain: ['#14a2d2', '#16b4e9', '#2dbceb', '#44c3ee', '#5ccbf0', '#73d2f2']
  };

  constructor(private store: Store, private route: ActivatedRoute) {}

  public treeMapData = null;

  public generateSkill(level: number) {
    const skillNames = [
      'None',
      'Beginner',
      'Novice',
      'Intermediate',
      'Advanced',
      'Expert'
    ];
    return skillNames[level];
  }

  public valueFormatting(c) {
    console.log(`${c} Years`);
    return `${c.value} Years`;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetEmployee(params.id));
      this.employee$.subscribe(employee => {
        this.employee = employee;
        console.log(employee);
        // Set tree-map data for employee
        if (this.employee) {
          this.treeMapData = employee.skills
            .filter(skill => skill.experience.years)
            .map(skill => {
              return {
                name: skill['name'],
                value: skill['experience']['years']
              };
            });
          console.log(this.treeMapData);
        }
        // console.log(this.treeMapData);
      });
    });
  }

  ngOnDestroy(): void {
    this.employee = null;
  }
}
