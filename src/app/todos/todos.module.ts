import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { TableComponent } from './components/table/table.component';
import { TodoComponent } from './pages/todo/todo.component';


@NgModule({
  declarations: [
    TodoComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
  ],
  exports : [
    TodoComponent,
    TableComponent,
  ]
})
export class TodosModule { }
