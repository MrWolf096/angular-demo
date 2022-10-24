import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { DemoComponent } from './components/demo/demo.component';
import { DetailsComponent } from './components/details/details.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
{
  path: 'demo',
  component: DemoComponent
} ,

{
  path: 'employees',
  component: EmployeesComponent
},
{
  path: 'crud',
  component: CrudComponent
},
{
  path: 'employee/details/:employeeId',
  component: DetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
