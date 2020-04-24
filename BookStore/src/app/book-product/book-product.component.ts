import { Component, OnInit } from '@angular/core';
import {Book} from '../model/Book'
import {HttpClientService} from '../service/http-client.service'
import { from } from 'rxjs'
@Component({
  selector: 'app-book-product',
  templateUrl: './book-product.component.html',
  styleUrls: ['./book-product.component.css']
})
export class BookProductComponent implements OnInit {

  books: Array<Book>;
  books1: Array<Book>;
  selectedBook: Book;
  
  constructor(private httpClientService: HttpClientService)
  {

  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

}
handleSuccessfulResponse(response) {
  this.books = new Array<Book>();
  this.books1 = response;
  for (const book of this.books1) {
  
    const book2 = new Book();
    book2.id = book.id;
    book2.name = book.name;
    book2.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
    book2.author = book.author;
    book2.price = book.price;
    book2.picByte=book2.retrievedImage;
    this.books.push(book2);
  }
}

}
