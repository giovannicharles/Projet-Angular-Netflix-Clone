import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'assets/movies.json'; // Chemin vers le fichier JSON

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.moviesUrl);
  }
}
