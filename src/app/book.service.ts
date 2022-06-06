import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './book';
import { BOOKS } from './demo-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'https://smbookserver.herokuapp.com/books';  // URL to web API
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError<Book[]>([]))
      );
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>())
    );
  }

  updateBook(book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  deleteBook(id: number): Observable<any> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions).pipe(
      catchError(this.handleError<Book>())
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    }
  }

    
}
