import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = []
  isEmpty = false;
  showDialog = false;
  indexOfCurrentItem:number;
  textToEdit:string;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.todos = this.dataservice.getTodos();
    
  }

  onFormSubmit(form:NgForm){
    this.isEmpty= true
    if(form.valid){
      this.todos.push(new Todo(form.value.content))
      form.reset();
      this.isEmpty = false;
      localStorage.setItem('todoStorage',JSON.stringify(this.todos))
    }
    
  }

  toggleComplete(todo:Todo){
      todo.isCompleted = !todo.isCompleted;
      localStorage.setItem('todoStorage',JSON.stringify(this.todos))
  }

  deletItem(index: number){
    this.dataservice.deleteTodo(index)
    localStorage.setItem('todoStorage',JSON.stringify(this.todos))

  }

  editItem(index:number){
    
    this.showDialog= true;
    this.indexOfCurrentItem = index;
    this.textToEdit = this.dataservice.getTodo(this.indexOfCurrentItem).text
    localStorage.setItem('todoStorage',JSON.stringify(this.todos))

    

  }

  cancelDialog(){
    this.showDialog = false;
  }

  onDialogSubmit(form:NgForm){
    if(form.valid){
     this.dataservice.updateTodo(this.indexOfCurrentItem , form.value.text)
     form.reset()
     this.cancelDialog()
     localStorage.setItem('todoStorage',JSON.stringify(this.todos))
    }
    
  }
  

}
