import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { BooksComponent } from './admin/books/books.component';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { ViewbookComponent } from './admin/books/viewbook/viewbook.component';
import { BookListComponent } from './book-product/book-list/book-list.component';
import {BookProductComponent} from './book-product/book-product.component'
import {HttpClientService} from "./service/http-client.service";
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
    BookProductComponent,
    BookListComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
