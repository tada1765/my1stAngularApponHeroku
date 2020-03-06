import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked');
    // return this.h1Style = !this.h1Style; //not work
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
}
