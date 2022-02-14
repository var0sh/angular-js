import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const movies = [
      {id: 1, name: 'Movie 1', description: 'Good Movie', imageUrl: '../assets/image/1.jpg'},
      {id: 2, name: 'Movie 2', description: 'Good Movie', imageUrl: '../assets/image/2.jpg'},
      {id: 3, name: 'Movie 3', description: 'Good Movie', imageUrl: '../assets/image/3.jpg'},
      {id: 4, name: 'Movie 4', description: 'Good Movie', imageUrl: '../assets/image/4.jpg'},
      {id: 5, name: 'Movie 5', description: 'Good Movie', imageUrl: '../assets/image/5.jpg'},
      {id: 6, name: 'Movie 6', description: 'Good Movie', imageUrl: '../assets/image/6.jpg'},
      {id: 7, name: 'Movie 7', description: 'Good Movie', imageUrl: '../assets/image/7.jpg'},
      {id: 8, name: 'Movie 8', description: 'Good Movie', imageUrl: '../assets/image/8.jpg'},
      {id: 9, name: 'Movie 9', description: 'Good Movie', imageUrl: '../assets/image/9.jpg'},
    ]
    return {movies}
  }

  constructor() { }
}
