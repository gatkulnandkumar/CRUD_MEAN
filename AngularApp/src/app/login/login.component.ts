import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    localStorage.clear();

  }
  
  modelLogin = {
    userName: "admin",
    password: "admin123"

  }


  submit(userForm:any) {
    localStorage.setItem("userName" ,userForm.userName);
    localStorage.setItem("password" ,userForm.password);

    if(userForm.userName=="admin" && userForm.password=="admin123")
    {
      this.router.navigate(['\employeeDashBoard']);
      console.log("this submit Button:===",userForm);

    }else{

      console.log("Invalid UserName or Password");
    }
    
  }
  
  
}
