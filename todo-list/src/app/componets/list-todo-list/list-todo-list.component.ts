import { Component, OnInit } from '@angular/core';
import { TodolistService} from '../../todolist.service';


@Component({
  selector: 'app-list-todo-list',
  templateUrl: './list-todo-list.component.html',
  styleUrls: ['./list-todo-list.component.scss']
})
export class ListTodoListComponent implements OnInit {

  constructor(private todolist:TodolistService ){}
  todoListData: any=[];
  dtOptions: DataTables.Settings = {};
 
  



  ngOnInit(): void { 
   this.dtOptions ={
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
   };

    this.todolist.getTodoList().subscribe((allData) => {
     // console.log(allData);
      this.todoListData=allData;
     

    });
  }

    deleteTodoList(todoList_id: any) {
      this.todolist.deleteTodoList(todoList_id).subscribe((allData) => {
        

        
        this.ngOnInit();
      
      });

    }
  }


