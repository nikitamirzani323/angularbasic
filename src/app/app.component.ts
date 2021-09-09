import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basic';
  data="Hello code ";

  getVal() {
    return "Code Step by Step"
  }
  getName(name:string | number){
    alert(name)
  }
  getData(val:string){
    console.warn(val)
  }
}
