import { Component, OnInit } from '@angular/core';
import { allBooks, allReaders } from 'src/app/data';

import { Book } from "../models/book";
import { Reader } from '../models/reader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[] = allBooks;
  allReaders: Reader[] = allReaders;
  mostPopularBook: Book = allBooks[0];

  constructor() { }

  ngOnInit() {
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
