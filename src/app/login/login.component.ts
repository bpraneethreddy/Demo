import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData:any;
  loginForm = new FormGroup({
    userName: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  });
  constructor(private route: Router) { }

  ngOnInit() {
  }
  validateUserLogin(values,valid){
    const session=JSON.parse(sessionStorage.getItem("loginData"));
    if(values.userName===session.userName && values.password===session.password){
      this.route.navigate(["employeelist"]);
    }else{
      this.route.navigate([""]);
    }
   
  }

}
