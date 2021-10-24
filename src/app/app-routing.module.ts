import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/pages/comments/comments.component';
import { PostComponent } from './posts/pages/post/post.component';
import { TodoComponent } from './todos/pages/todo/todo.component';

const routes: Routes = [
  {
    path : '',
    component : TodoComponent,
    pathMatch : 'full'
  },
  {
    path : 'comments',
    component : CommentsComponent
  },
  {
    path : 'posts',
    component : PostComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
