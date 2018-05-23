import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    localStorage.setItem("employeeData", JSON.stringify([
    {
      "userName": "vikram",
      "email": "vik@gmail.com",
      "department": "Java",
      "salary": "12000"
    },{
      "userName": "Praneeth",
      "email": "praneeth@gmail.com",
      "department": "Java",
      "salary": "12000"
    },{
      "userName": "Mahesh Chary",
      "email": "chary@gmail.com",
      "department": "Java",
      "salary": "12000"
    }]));
    sessionStorage.setItem("loginData", JSON.stringify({"userName":"praneeth","password":"the@123"}))
  }
}
