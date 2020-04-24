import { Component, OnInit,Input, Output } from '@angular/core';
import { Book } from '../../model/Book';
import { from } from 'rxjs';
import { MessengerService} from '../../service/messenger.service'
@Component({

  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input()
  bookItem: Book;
  ngOnInit() {
  }
  constructor(private _msgService: MessengerService) {

  }
  handleAddToCart() {
    console.log("handle cart")
    this._msgService.sendToMessangerService(this.bookItem);
    console.log(this.bookItem)
  }
}