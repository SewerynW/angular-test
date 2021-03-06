import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiSearchResponce } from "@shared/models/movie.model";
import { Observable } from "rxjs";

// API KEY
// 84e7317b
const API_URL = 'http://www.omdbapi.com/?apikey=84e7317b&'

@Injectable({ providedIn: 'root' })
export class MoviesService {

    constructor(private http: HttpClient) { }

    getMoviesByName$(title: string): Observable<ApiSearchResponce> {
        return this.http.get(`${API_URL}s=${title}`) as Observable<ApiSearchResponce>
    }
}