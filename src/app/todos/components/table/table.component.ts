import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

const ELEMENT_DATA : Todo[] = [
  {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
  },
  {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
  },
  {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
  },
  {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
  },
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'Id', 'Title', 'Status'];
  

  @Input()Todo : Todo[] = [];
  // dataSource = this.Todo;
  dataSource = ELEMENT_DATA;
  
  constructor(private todo: TodoService) { }

  ngOnInit(): void {
  }

}
