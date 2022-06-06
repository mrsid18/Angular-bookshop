import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { SingleBookComponent } from './single-book/single-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BooksGridComponent,
    SingleBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
