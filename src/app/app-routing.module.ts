import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { SingleBookComponent } from './single-book/single-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksGridComponent },
  {path: 'book/:id', component: SingleBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
