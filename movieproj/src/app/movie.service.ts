import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private baseUrl = 'https://movie-database-alternative.p.rapidapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<MovieSearchResponse> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '',
      'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
    });

    return this.http.get<MovieSearchResponse>(`${this.baseUrl}?s=${query}&r=json&page=1`, { headers });
  }
}
