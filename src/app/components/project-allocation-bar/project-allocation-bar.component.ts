import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-allocation-bar',
  templateUrl: './project-allocation-bar.component.html',
  styleUrls: ['./project-allocation-bar.component.scss']
})
export class ProjectAllocationBarComponent implements OnInit {
  @Input() currentAssignments: any;

  constructor() {}

  ngOnInit(): void {
    console.log('currentAssignments: ', this.currentAssignments);
  }
}
