import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { SingleBookComponent } from './single-book/single-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksGridComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'book/:id', component: SingleBookComponent },
  { path: '**', redirectTo: '/books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
