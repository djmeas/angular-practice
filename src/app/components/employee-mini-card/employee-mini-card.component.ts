import { Component, OnInit, Input } from '@angular/core';
import { generateSkill } from '../../utils/skill.utils';

@Component({
  selector: 'app-employee-mini-card',
  templateUrl: './employee-mini-card.component.html',
  styleUrls: ['./employee-mini-card.component.scss']
})
export class EmployeeMiniCardComponent implements OnInit {
  @Input() employee: any;

  public generateSkill = generateSkill;

  constructor() {}

  ngOnInit(): void {
    console.log('employee: ', this.employee);
  }
}
