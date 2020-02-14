import { Injectable } from '@angular/core';

import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';

import { formatDate } from '@angular/common';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = '8692bd9bb378d43644af4c57a1a84905';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  movies: any;

  constructor(public jsonp: HttpClientJsonpModule, public http: HttpClient) {}

  getBillboard() {
    const from = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
    const to = formatDate(
      new Date().setDate(new Date().getDate() + 7),
      'yyyy-MM-dd',
      'en-US'
    );

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${from}&primary_release_date.lte=${to}&api_key=${this.apikey}&language=es`;

    return this.http.jsonp(url, 'callback');
  }

  getPopular() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.jsonp(url, 'callback');
  }

  getKidsPopular() {
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.jsonp(url, 'callback');
  }

  searchMovie(texto: string) {
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    // tslint:disable-next-line: no-string-literal
    return this.http.jsonp(url, 'callback').pipe( map( res => this.movies = res['results'] ));
  }

  getMovie( id: string ) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;

    return this.http.jsonp(url, 'callback');
  }
}
