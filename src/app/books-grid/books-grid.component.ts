import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss']
})
export class BooksGridComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService :BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
