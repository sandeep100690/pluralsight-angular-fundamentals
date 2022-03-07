import { Injectable } from '@angular/core';
import { allBooks, allReaders } from 'src/app/data';
import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor(private loggerService: LoggerService) { }
  
  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders():Reader[] {
    return allReaders;
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
