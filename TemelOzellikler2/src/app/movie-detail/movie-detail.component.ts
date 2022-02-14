import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
      })
  }

  saveChanges(): void {
    this.movieService.update(this.movie)
      .subscribe(() => {
        this.location.back();
      });  
  }

}
