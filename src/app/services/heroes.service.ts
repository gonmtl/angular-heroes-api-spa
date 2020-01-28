import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://superheroapi.com/api/2825672620809225/';
// const API_URL = 'https://jsonplaceholder.typicode.com/todos/';
// const API_URL = 'https://randomuser.me/api/?results=25';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get(API_URL);
  }

}
