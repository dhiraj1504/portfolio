import { Component } from '@angular/core';
import { OpenNewTab } from '../shared/OpenUrlInNewTab';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  opentab : OpenNewTab
  constructor() {
    this.opentab = new OpenNewTab();
  }

  openFunc(url : string | undefined){
    this.opentab.openTab(url);
  }
}
