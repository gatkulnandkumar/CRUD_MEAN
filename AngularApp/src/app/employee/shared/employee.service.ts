import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

import { Employee } from './employee.model';
import { SingUp } from './sing-up.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
   selectedEmployee : Employee;
   signUpEmployee : SingUp;
   employees: Employee[];
    readonly baseURL = "http://localhost:3000/employees";

    readonly signUpbaseURL = "http://localhost:3000/signUp";

  constructor(private http : HttpClient) { }

  postEmployee(emp : Employee){
    return this.http.post(this.baseURL + '/insertEmployee' ,emp);
  }

  getEmployeeList(){
    return this.http.get(this.baseURL);
  }

  putEmployee(emp : Employee){
    console.log("inside update put===>",emp._id) ;

    console.log("inside update put $$$===>",this.baseURL + '/' + emp._id );
    return this.http.put(this.baseURL + '/' + emp._id, emp);
    
  }

  deleteEmployee(_id : string){
    // return this.http.delete(this.baseURL + '/${_id}');
   return this.http.delete(this.baseURL +  '/' + _id);
  }

  signUpData(signup : SingUp)
  {
    return this.http.post(this.signUpbaseURL + '/signUpEmployee' ,signup);
  }

}
