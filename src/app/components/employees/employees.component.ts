import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  isDisabled = true;
  birthday = new Date(2001,5,9);
  selectedStudent : any;

students = [
  {name: "Ana" , age: 21 , college: "Vianu" , address: "Romania"},
  {name: "Mina" , age: 22 , college: "Vianu" , address: "Romania"},
  {name: "Andrei" , age: 25  , college: "Vianu" , address: "Romania"},
  {name: "Maria" , age: 23  , college: "Vianu" , address: "Romania"}
]

clickStudent(student : any){
  this.selectedStudent = student;
  console.log("Student data is: " + JSON.stringify(this.selectedStudent));
  console.log("Student's age is: " + student.age);

}

  constructor() { }

  ngOnInit(): void {
  }

}
