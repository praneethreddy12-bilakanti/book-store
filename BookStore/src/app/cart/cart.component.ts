import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service'
import { Book } from 'src/app/model/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bookItems :Array<Book>;

  cartTotal = 0

  constructor(private msg: MessengerService) {
    this.bookItems=Array<Book>();

   }

  ngOnInit() {
    console.log(";;;;;;;;;;;;;;;;;;;;;;;")
    this.msg.getMsg().subscribe((books : Book) => {
      console.log("book in cart:"+books.author); 
      this.addProductToCart(books);
    });
  }

  addProductToCart(books: Book) {
    let productExists = false

    for (let i in this.bookItems) {
      if (this.bookItems[i].id === books.id) {
        this.bookItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
     
      this.bookItems.push(books);

      
    }
  
  
    this.cartTotal = 0
    this.bookItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
