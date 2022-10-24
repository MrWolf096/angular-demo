import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL = "http://localhost:3000/employees/"

  constructor(private httpClient:HttpClient) { }

  //HTTP requests

  //HTTP get request
  readAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiURL);
  }

  //HTTP get result by id
  readEmployeeByID(id:any):Observable<Employee>{
    return this.httpClient.get<Employee>(this.apiURL + id);
  }

  //HTTP delete result by id 
  deleteEmployeeByID(id:any):Observable<Employee>{
    return this.httpClient.delete<Employee>(this.apiURL + id);

  }



  
}
