import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/shared/employee.service';
declare var M: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(public employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }


  modelSignUp = {
    firstname: "",
    lastname:"",
    username: "",
    password: ""
  }

  
  resetForm(form?:NgForm){
    if(form)
    form.reset();
    this.employeeService.signUpEmployee = {
      firstname: "",
      lastname:"",
      username: "",
      password: ""
  
    }
   
  }

  onSubmit(form : NgForm)
  {
    console.log("inside onSubmit button===>",form.value);
    
    this.employeeService.signUpData(form.value).subscribe((res) =>{
      this.resetForm(form); 
      // this.refreshEmployeeList();
      console.log("Inside onSubmit");
      M.toast({ html:'Successfullly Saved' , classess:'rounded'})  
      // window.location.reload();  
    });
  //  }

  }



  }


