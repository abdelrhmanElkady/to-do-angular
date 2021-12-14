import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/Todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

 @Input() todo:Todo 
 @Output() itemClicked:EventEmitter<void> = new EventEmitter();
 @Output() deleteClicked:EventEmitter<void> = new EventEmitter();
 @Output() editClicked:EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  onItemClicked(){
    this.itemClicked.emit()
  }

  onDeleteClicked(){
    this.deleteClicked.emit();
  }

  onEditClicked(){
   this.editClicked.emit()
  }

}
