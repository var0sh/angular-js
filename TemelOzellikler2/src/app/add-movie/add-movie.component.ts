import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'addMovie',
  templateUrl: './add-movie.component.html'
})
export class AddMovieComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private moviesComponent: MoviesComponent
    ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      })
  }

  addMovie(name: string, imageUrl: string, description: string) {
    this.movieService.addMovie({name, imageUrl, description} as Movie)
      .subscribe(movie => {
        this.moviesComponent.addMovieToMovies(movie);
      })
  }

}
