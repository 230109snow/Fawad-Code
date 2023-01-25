import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  url='http://localhost:3000/todoList';

  constructor(private http:HttpClient) { }
  getTodoList(){
    return this.http.get(this.url);
  }
   saveTodoListData(data: any ){
   // console.log(data);
     return this.http.post( this.url, data);
   }
  deleteTodoList( id:any){
  return this.http.delete( `${this.url}/${id}` );

  }
  getTodoListById(id: number){
    return this.http.get( `${this.url}/${id}` );

  }
  updateTodoListData(id: number,data: any){
    return this.http.put( `${this.url}/${id}`, data );

  }
}
