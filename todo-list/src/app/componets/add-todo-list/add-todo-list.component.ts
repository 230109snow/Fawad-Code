import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { TodolistService } from 'src/app/todolist.service';
@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent implements OnInit {
  constructor(private todoList: TodolistService){}
  addTodoList=new FormGroup( {
    Todo: new FormControl( '' ),
    timeStart: new FormControl( '' ),
    timeEnd: new FormControl( '' ),
    date: new FormControl( '' ),
    status: new FormControl( '' )
  
})
message:boolean=false;

  ngOnInit(): void {

    
  }
  saveData(){
    console.log( this.addTodoList.value);
    this.todoList.saveTodoListData( this.addTodoList.value).subscribe((result) => {
    //console.log(result)
    this.message=true;
    this.addTodoList.reset( {} );
     } );

  }
  removeMessage(){
    this.message=false;
  }

}
