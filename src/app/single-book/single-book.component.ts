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

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

}
