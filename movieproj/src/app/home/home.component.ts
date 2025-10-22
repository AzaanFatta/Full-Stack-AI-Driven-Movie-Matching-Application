import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../movie.service'; // Make sure to import the service
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query: string = '';
  movies: any[] = [];
  errorMessage: string | null = null;
  currentPage: number = 1;
  totalPages: number = 1;



  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  searchMovies() {
    this.movies = []; // Clear existing movies
    this.currentPage = 1;
    this.fetchMovies(this.currentPage);
  }

 fetchMovies(page: number) {
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${this.query}&page=${page}&r=json`;
    
    this.http.get<any>(url, {
      headers: {
    // 'X-RapidAPI-Key': 'YOUR_OWN_RAPIDAPI_KEY_HERE', // ← insert your key
    // 'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      }
    }).subscribe(
      (data: any) => {
        if (data.Response === 'True') {
          this.movies = this.movies.concat(data.Search); // Append new movies to existing list
          this.totalPages = Math.ceil(data.totalResults / 10); // Assuming 10 results per page
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.fetchMovies(this.currentPage); // Fetch next page
          }
        } else {
          this.errorMessage = data.Error;
        }
      },
      (error) => {
        this.errorMessage = 'Failed to fetch movies. Please try again.';
      }
    );
  }

  navigateToMovie(imdbID: string) {
    this.router.navigate(['/movie', imdbID]);
  }

}