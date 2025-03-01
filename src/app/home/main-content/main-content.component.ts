import { Component } from '@angular/core';
import { MovieListComponent } from "./movie-list/movie-list.component";

@Component({
  selector: 'app-main-content',
  imports: [MovieListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
