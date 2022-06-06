import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book | undefined;
  editBook: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private Location: Location
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  goBack(): void {
    this.Location.back();
  }

  save(): void {
    if(this.book) this.bookService.updateBook(this.book).subscribe(() => this.toggleEdit());
  }

  toggleEdit(): void {
    this.editBook = !this.editBook;
  }

  deleteBook(): void {
    if (this.book) this.bookService.deleteBook(this.book.id).subscribe(() => this.goBack());
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

}
