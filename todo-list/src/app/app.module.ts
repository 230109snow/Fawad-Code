import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoListComponent } from './componets/add-todo-list/add-todo-list.component';
import { EditTodoListComponent } from './componets/edit-todo-list/edit-todo-list.component';
import { ListTodoListComponent } from './componets/list-todo-list/list-todo-list.component';
import { LoginTodoListComponent } from './componets/login-todo-list/login-todo-list.component';
import { RegistrationTodoListComponent } from './componets/registration-todo-list/registration-todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from'@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoListComponent,
    EditTodoListComponent,
    ListTodoListComponent,
    LoginTodoListComponent,
    RegistrationTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
