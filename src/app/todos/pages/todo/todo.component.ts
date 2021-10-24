import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Todo} from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  termino : string = '';
  ThereIsAerror : boolean = false;
  todo : Todo[] = [];

  constructor( private todoService : TodoService) { }

  ngOnInit(): void {
  }
  search(){
    this.ThereIsAerror = false;

    console.log(this.termino);
    this.todoService.searchTodo(this.termino).subscribe((todo) =>{
      console.log(todo);
      this.todo = todo;
    }, (err) =>{
      this.ThereIsAerror = true;
      this.todo = [];
    });
  }
}
