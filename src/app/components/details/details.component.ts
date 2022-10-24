import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id!:number;
  employeeData!:Employee;

  constructor(private employeeService:EmployeeService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployeeDataByID();
  }

  getEmployeeDataByID():void{
     this.id = this.activateRoute.snapshot.params['employeeId'];
     this.employeeService.readEmployeeByID(this.id).subscribe((data:Employee)=>{
     this.employeeData = data;
     console.log("Employee with id: " + this.id + " data: " + JSON.stringify(this.employeeData))
     })
  }

  
}
