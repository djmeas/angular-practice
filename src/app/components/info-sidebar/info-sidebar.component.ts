import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-sidebar',
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss']
})
export class InfoSidebarComponent implements OnInit {
  @Input() displayInfoBar = false;

  constructor() {}

  public testFunction(content) {
    console.log(content);
  }

  ngOnInit(): void {
    console.log('infosidebar loaded');
  }
}
