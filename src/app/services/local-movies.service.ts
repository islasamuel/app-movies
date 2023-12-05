import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IThumbnail } from '../interfaces/thumbnail.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalMoviesService {

  readonly #http = inject(HttpClient);

  private readonly url: string = './assets/json/local-movies.json';

  getMovies() {
    return this.#http.get<IThumbnail[]>(this.url);
  }
}
