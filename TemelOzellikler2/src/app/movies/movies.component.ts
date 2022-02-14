import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      })
  }

  deleteMovie(movie: Movie) {
    this.movies = this.movies.filter(m => m !== movie)
    this.movieService.deleteMovie(movie);
  }

  addMovieToMovies(movie: Movie) {
    this.movies.push(movie);
  }

}
