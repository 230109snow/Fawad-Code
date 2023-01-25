import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { TodolistService } from 'src/app/todolist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.scss']
})
export class EditTodoListComponent implements OnInit{
  constructor(private todoList: TodolistService, private router: ActivatedRoute){}
  editodoList=new FormGroup( {
    Todo: new FormControl( '' ),
    timeStart: new FormControl( '' ),
    timeEnd: new FormControl( '' ),
    date: new FormControl( '' ),
    status: new FormControl( '' ),
  
});
message:boolean=false;

  ngOnInit(): void {
   //console.log(this.router.snapshot.params['id'])
    this.todoList.getTodoListById(this.router.snapshot.params['id']).subscribe((result: any)=>{
     // console.log(result);
      this.editodoList=new FormGroup({
        Todo: new FormControl( result['Todo'] ),
    timeStart: new FormControl( result['timeStart']  ),
    timeEnd: new FormControl( result['timeEnd']  ),
    date: new FormControl( result['date']  ),
    status: new FormControl( result['status'] ),

      });
  
    });

  }
  updateData(){
    //console.log(this.editodoList.value);
    this.todoList.updateTodoListData( this.router.snapshot.params['id'], this.editodoList.value).subscribe((result: any)=>{
   // console.log(result);
   this.message=true;


    });

  }
  removeMessage(){
  this.message=false;
  }
}
