import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BOOKS } from './demo-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() : Observable<Book[]> {
    const books = of(BOOKS);
    return books;
  }

  getBook(id: number): Observable<Book> {
    const book = BOOKS.find(book => book.id === id)!;
    return of(book);
  }
    
}
