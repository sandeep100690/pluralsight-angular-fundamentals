import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { allBooks, allReaders } from 'src/app/data';
import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { LoggerService } from './logger.service';
import { BookTrackerError } from '../models/booktracker.error';

@Injectable()

export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor(private loggerService: LoggerService, private http: HttpClient) { }
  
  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Observable<Reader[] | BookTrackerError> {
    return this.http.get<Reader[]>('/api/readers)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse): Observable<BookTrackerError> {
    let dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrieving data.';
    return throwError(dataError);
  }

  getReadersById(id:number):Reader{
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[]{
    return allBooks;
  }
  
  getBookById(id:number): Book{
    return allBooks.find(book => book.bookID === id);
  }
}
