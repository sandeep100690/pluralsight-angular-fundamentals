import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../core/data.service';
import { LoggerService } from '../core/logger.service';

import { Book } from "../models/book";
import { BookTrackerError } from '../models/booktracker.error';
import { Reader } from '../models/reader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService, 
              private dataService: DataService) { 
    // this.loggerService.log('Creating the Dashboard.');
    this.loggerService.log('Creating the dashboard!');
  }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders()
      .subscribe(
        (data: Reader[] | BookTrackerError) => this.allReaders = <Reader[]>data,
        (err: BookTrackerError) => this.loggerService.log(err.friendlyMessage),
        () => this.loggerService.log('All done getting readers!')
      );
    this.mostPopularBook = this.dataService.mostPopularBook;
    this.loggerService.log('Done with dashboard initialisation');
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
