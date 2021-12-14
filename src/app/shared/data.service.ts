
import { jsDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Todo } from './Todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos:Todo[] =[];
  

  constructor() { 

    //to intialize the array with the data in localStorage if founded
    if(localStorage.getItem("todoStorage")){
      this.todos =  JSON.parse(localStorage.getItem("todoStorage") as string)
    }else{
      this.todos = []
    }
   




  }


  getTodos(){
    return this.todos;
  }

  getTodo(index:number){
   
    return  this.todos[index]
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  updateTodo(index:number,updatedTodoText:string){
   
    this.todos[index].text = updatedTodoText
  }

  deleteTodo(index:number){
   
    this.todos.splice(index,1)
  }
}


