import { Component } from '@angular/core';
import { OpenNewTab } from './shared/OpenUrlInNewTab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  openTab : OpenNewTab;

  constructor() {
    this.openTab = new OpenNewTab();
  }

  openFunc(url : string | undefined){
    this.openTab.openTab(url);
  }
}
