import { Component, OnInit, inject } from '@angular/core';
import { IThumbnail } from 'src/app/interfaces/thumbnail.interface';
import { LocalMoviesService } from 'src/app/services/local-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  readonly #localMoviesService = inject(LocalMoviesService);

  lstThumbnail: IThumbnail[] = []

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.#localMoviesService.getMovies().subscribe((response: IThumbnail[]) => {
      this.lstThumbnail = response
    })
  }




}
