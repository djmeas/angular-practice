import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-allocation-details',
  templateUrl: './project-allocation-details.component.html',
  styleUrls: ['./project-allocation-details.component.scss']
})
export class ProjectAllocationDetailsComponent implements OnInit {
  @Input() employee = null;

  constructor() {}

  public generateSkill(level: number) {
    const skillNames = [
      '',
      'Beginner',
      'Novice',
      'Intermediate',
      'Advanced',
      'Expert'
    ];
    return skillNames[level];
  }

  ngOnInit(): void {}
}
