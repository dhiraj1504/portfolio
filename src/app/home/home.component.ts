import { Component, OnInit } from '@angular/core';
import { OpenNewTab } from '../shared/OpenUrlInNewTab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  s: string[] = ["data analyst","ml engineer", "data scientist"]    
  isfwd : boolean = true;
  typeef() {
    var con = document.querySelector('.context')!;
    var i = 0;
    var j = 1;
    setInterval(() => {
      con.textContent = this.s[i].substring(0, j).toUpperCase();
      if (this.isfwd) {
        j++;
      }
      else {
        j--;
      }

      if (j > this.s[i].length + 10) {
        this.isfwd = false;
      }

      if (j < 0) {
        this.isfwd = true;
        j = 1;
        i++;
      }

      if (i == this.s.length) {
        i = 0;
      }
    }, 150)
  }

  openFunc(url : string | undefined){
    let opentab = new OpenNewTab();
    opentab.openTab(url);
  }

  ngOnInit(): void {
    this.typeef();
  }

}
