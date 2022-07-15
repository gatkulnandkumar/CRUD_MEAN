import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './shared/employee.model';
import { EmployeeService } from './shared/employee.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this.resetForm();
    this.refreshEmployeeList();
  }


  resetForm(form?:NgForm){
    if(form)
    form.reset();
    this.employeeService.selectedEmployee = {

      _id: " ",
      empId: " ",
      name: " ",
      position: " ",
      office:" ",
      salary: null
  
    }
   
  }
  onSubmit(form : NgForm)
  {
    console.log("inside onSubmit button===>",form.value);
    
    console.log("form.value.empId !=' '==>",form.value.empId !=' ');

    console.log("form.value._id ==>",form.value._id == " ");
    
    if(form.value._id == " "){
    // if(form.value.empId !=' '){
    this.employeeService.postEmployee(form.value).subscribe((res) =>{
      this.resetForm(form); 
      this.refreshEmployeeList();
      console.log("Inside onSubmit");
      M.toast({ html:'Successfullly Saved' , classess:'rounded'})    
    });
   }
  else{
    this.employeeService.putEmployee(form.value).subscribe((res) =>{
      this.resetForm(form); 
      console.log("update onSubmit====>");
      this.refreshEmployeeList();
      console.log("response===>",res);
      
      M.toast({ html:'Successfullly Updated' , classess:'rounded'})    
    });

  }
  }


refreshEmployeeList(){
  this.employeeService.getEmployeeList().subscribe((res) => {
    this.employeeService.employees = res as Employee[]
  })
}

onEditEmployee(emp : Employee)
{
  this.employeeService.selectedEmployee =emp;
    
}

onDeleteEmployee(_id: string , form: NgForm){
  if(confirm('Are you sure to delete this record ?') ==  true){
    this.employeeService.deleteEmployee(_id).subscribe((res) => {
      this.refreshEmployeeList();
      this.resetForm();
    });

  }
}

}
