import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('Listing movies..');
    return this.http.get<Movie[]>(this.apiMoviesUrl)
  }

  getMovie(id: number): Observable<Movie | any> {
    this.loggingService.add(`#${id} movie listed..`)
    return this.http.get<Movie>(this.apiMoviesUrl + '/' + id)
  }

  update(movie: Movie): Observable<any> {
    return this.http.put(this.apiMoviesUrl, movie)
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiMoviesUrl, movie);    
  }

  deleteMovie(movie: Movie) {
    this.http.delete<Movie>(this.apiMoviesUrl + '/' + movie.id)
  }
}
