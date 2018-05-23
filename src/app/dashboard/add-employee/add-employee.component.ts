import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  isSubmit=false;
  isUpdate=false;

  constructor(private route: Router, 
    private activatedRoute: ActivatedRoute) { }

  userForm = new FormGroup({
    userName: new FormControl(null,Validators.required),
    email: new FormControl(null,Validators.required),
    salary: new FormControl(null,Validators.required),
    department: new FormControl(null,Validators.required),
    description: new FormControl()
  });

  userId: any;
employeeData:any;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params;
    });
    if (!(this.userId.id==-1)) {
      this.isUpdate=true;
      console.log('userId',this.userId.id);
      this.employeeData=JSON.parse(localStorage.getItem("employeeData"))[this.userId.id];
      console.log('data',this.employeeData);  
      this.userForm.patchValue(JSON.parse(localStorage.getItem("employeeData"))[this.userId.id]);
    }
  }
  userUpdateData:any

  addEmployee(values, valid) {
    console.log('valid--',valid);
    this.isSubmit =true;
    if (valid) {
      if(!(JSON.parse(localStorage.getItem("employeeData"))[this.userId.id]==undefined)){
        this.userUpdateData = JSON.parse(localStorage.getItem("employeeData"));
        console.log('data----',this.userUpdateData);
        console.log('values---',values);
        this.userUpdateData[this.userId.id]=values
        localStorage.setItem("employeeData",JSON.stringify(this.userUpdateData));
      }else{
        this.userUpdateData = JSON.parse(localStorage.getItem("employeeData"));
        this.userUpdateData.push(values);
        localStorage.setItem("employeeData", JSON.stringify(this.userUpdateData));
      }
      this.route.navigate(["employeelist"]);
    }
      
    }
  }
