import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'
  constructor(private http : HttpClient) { }

  searchTodo(termino:string ) : Observable<Todo[]>{
    const url = `${this.apiUrl}/todos/${termino}`
    return this.http.get<Todo[]>(url);
  }
}
