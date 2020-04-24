import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Book } from '../model/Book';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:9090/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:9090/users/add', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:9090/users/' + id);
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:9090/books/get');
  }

  addUploadData(selectedFile) {
    return this.httpClient.post('http://localhost:9090/books/upload', selectedFile);
  }

  addBook(newBook) {
    return this.httpClient.post<Book>('http://localhost:9090/books/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>('http://localhost:9090/books/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>('http://localhost:9090/books/update', updatedBook);
  }
}