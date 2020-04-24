import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { from } from 'rxjs';
import { BookProductComponent } from './book-product/book-product.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent },
  {
    path:'books',component:BookProductComponent
  },
  {
    path:'cart',component:CartComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
