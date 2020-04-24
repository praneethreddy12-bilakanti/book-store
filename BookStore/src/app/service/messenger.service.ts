import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import{Book} from '../model/Book'
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
subject =new Subject();

  constructor() {
  }

  public sendToMessangerService(item: Book) {
    console.log("item"+item.name);
    console.log("item"+item.price);
    this.subject.next(item);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
