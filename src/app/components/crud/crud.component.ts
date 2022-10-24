import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-crude',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  employeesList:Employee[] = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.readAllEmployees().subscribe((data:Employee[]) =>{
      
      this.employeesList = data ;
      console.log("Employees data: " + JSON.stringify(this.employeesList));

    })
    
  }

  removeEmployeeByID(id:any){
    this.employeeService.deleteEmployeeByID(id).subscribe(data=>{
      this.employeesList = this.employeesList.filter(emp => emp.id !==id);
      console.log("Employee with id: " + id + " deleted succesuful.")
    })
  }

}
