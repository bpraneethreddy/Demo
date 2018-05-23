import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: any;
  @Input() employeeDetails: {};
  // @Output() updated : EventEmitter<any> =new EventEmitter(); 
  constructor(private route: Router) { }

  ngOnInit() {
    this.employeeList = JSON.parse(localStorage.getItem("employeeData"));
    console.log('employeeList', this.employeeList);
  }
  deleteEmployee(index) {
    this.employeeList = JSON.parse(localStorage.getItem("employeeData"));
    this.employeeList.splice(index, 1);
    localStorage.setItem("employeeData", JSON.stringify(this.employeeList));
  }
  editEmployee(index) {
    this.route.navigate(["addemployee/" + index]);
  }
  addEmployee() {
    this.route.navigate(["addemployee/" + -1]);
  }
}
