import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { generateSkill } from '../../utils/skill.utils';
import { InfoSidebarComponent } from '../info-sidebar/info-sidebar.component';
import { ProjectAllocationBarComponent } from '../project-allocation-bar/project-allocation-bar.component';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-mini-card',
  templateUrl: './employee-mini-card.component.html',
  styleUrls: ['./employee-mini-card.component.scss']
})
export class EmployeeMiniCardComponent implements OnInit {
  @Input() employee: any;
  @Output() compareEmployee = new EventEmitter();
  @Output() quickView = new EventEmitter();

  public generateSkill = generateSkill;

  constructor() {}

  public setCompareEmployee(): void {
    this.compareEmployee.emit(this.employee);
  }

  public setQuickView(): void {
    this.quickView.emit(this.employee);
  }

  ngOnInit(): void {
    console.log('employee: ', this.employee);
  }
}
