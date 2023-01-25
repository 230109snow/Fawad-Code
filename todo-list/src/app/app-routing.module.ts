import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { AddTodoListComponent } from './componets/add-todo-list/add-todo-list.component';
import { EditTodoListComponent } from './componets/edit-todo-list/edit-todo-list.component';
import { ListTodoListComponent } from './componets/list-todo-list/list-todo-list.component';
import { LoginTodoListComponent } from './componets/login-todo-list/login-todo-list.component';
import { RegistrationTodoListComponent } from './componets/registration-todo-list/registration-todo-list.component';

const routes: Routes = [
  {
    path:'add',
    component:AddTodoListComponent
  },
  {
    path:'edit/:id',
    component:EditTodoListComponent
  },
  {
    path:'list',
    component:ListTodoListComponent
  },
  {
    path:'login',
    component:LoginTodoListComponent
  },
  {
    path:'registration',
    component:RegistrationTodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
