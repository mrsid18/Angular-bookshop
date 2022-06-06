import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
  
export class AddBookComponent implements OnInit {
  addBookForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    description: [''],
    genre: ['', Validators.required],
    cover: ['', Validators.required],
    language: ['', Validators.required],
  });

  get title() {
    return this.addBookForm.get('title')!;
  }

  get author() {
    return this.addBookForm.get('author')!;
  }

  get price() {
    return this.addBookForm.get('price')!;
  }

  get cover() {
    return this.addBookForm.get('cover')!;
  }

  get language() {
    return this.addBookForm.get('language')!;
  }

  get genre() {
    return this.addBookForm.get('genre')!;
  }

  constructor(private bookService: BookService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {}

  addBook(): void {
    if(!this.addBookForm.valid) {
      this.addBookForm.markAllAsTouched();
      return;
    }
    const book: Book = {
      id: 0,
      title: this.addBookForm.value.title!,
      author: this.addBookForm.value.author!,
      price: this.addBookForm.value.price!,
      description: this.addBookForm.value.description!,
      genre: this.addBookForm.value.genre!,
      cover: this.addBookForm.value.cover!,
      language: this.addBookForm.value.language!,
    };
    this.bookService.addBook(book).subscribe((book) => this.router.navigate([`/book/${book.id}`]));
  }
}
