import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.movies;
    });
  }
}
