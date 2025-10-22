import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  movieId: string;
  movie: any;
  similarMovies: string[] = [];
  errorMessage: string = '';


  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.movieId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.fetchMovieDetails();
  }

  logout() {
    this.router.navigate(['/login']);
  }

  back() {
    this.router.navigate(['/home']);
    }



    fetchMovieDetails() {
      const headers = new HttpHeaders({
    // 'X-RapidAPI-Key': 'YOUR_OWN_RAPIDAPI_KEY_HERE', // ← insert your key
    // 'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      });
    
      const url = `https://movie-database-alternative.p.rapidapi.com/?i=${this.movieId}&r=json`;
    
      this.http.get<any>(url, { headers }).subscribe(
        response => {
          this.movie = response;
          if (this.movie && this.movie.Title) {
            this.getSimilarMovies(this.movie.Title);
          } else {
            console.error('Movie details are not available');
          }
        },
        error => {
          console.error('Failed to fetch movie details', error);
        }
      );
    }
    

  getSimilarMovies(movieTitle: string): void {
    const chatApiUrl = 'https://open-ai21.p.rapidapi.com/chatgpt';
    const headers = new HttpHeaders({
// headers.set("X-RapidAPI-Key", "YOUR_RAPIDAPI_KEY_HERE");
// headers.set("X-RapidAPI-Host", "open-ai21.p.rapidapi.com");
      'Content-Type': 'application/json'
    });
  
    const body = {
      messages: [
        {
          role: 'user',
          content: `Do not respond to my question at all, ONLY Give me a list of 10 movies similar to ${movieTitle}`
        }
      ],
      web_access: false
    };
  
   this.http.post<any>(chatApiUrl, body, { headers }).subscribe(response => {
    console.log('API response:', response);
    if (response && response.result) {
      this.similarMovies = response.result.split('\n').map((movie: string) => movie.trim());
    } else {
      this.errorMessage = 'Failed to get similar movies.';
    }
  }, error => {
    console.error('Failed to fetch similar movies', error);
    this.errorMessage = 'Failed to get similar movies.';
  });
}
}