import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basic';
  data="Hello code ";
  dataNumber=10;
  displayVal='';
  count = 0;
  disabled=true
  color="red"
  bgcolor="blue"
  users=['Andy','Susi','Eko']
  userDetails=[
    {name:"Andy",email:"andy@gmail.com",phone:"11111",accounts:['facebook','gmailu']},
    {name:"Susi",email:"susi@gmail.com",phone:"22222",accounts:['facebooka','gmailu']},
    {name:"Eko",email:"eko@gmail.com",phone:"33333",accounts:['facebookb','gmaily']},
    {name:"Peter",email:"peter@gmail.com",phone:"4444",accounts:['facebookv','gmailt']},
    {name:"Anton",email:"anton@gmail.com",phone:"5555",accounts:['facebookc','gmails']}
  ]
  updateDataChild(item:string){
    console.warn(item)
    this.data=item
  }
  updateData(){
    this.dataNumber=Math.floor(Math.random()*10)
  }
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item})
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
  toggle(){
    this.disabled = !this.disabled
  }
  userData:any={};
  getForm(data:NgForm){
    console.warn(data)
    this.userData=data
  }

  updateColor(){
    this.color="skyblue"
    this.bgcolor = "green"
  }
  counter(type:string){
    type==='add'?this.count++:this.count--
  }

  getValue(val:string){
    console.warn(val)
    this.displayVal = val

  }
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
