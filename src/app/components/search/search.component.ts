import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  search = '';

  constructor(
    public movieServices: MoviesService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(parametros => {
      // tslint:disable-next-line: no-string-literal
      if (parametros['text']) {
        // tslint:disable-next-line: no-string-literal
        this.search = parametros['text'];
        this.movieSearch();
      }
    });
  }

  ngOnInit() {}

  movieSearch() {
    if (this.search.length === 0) {
      return;
    }
    // tslint:disable-next-line: no-string-literal
    this.movieServices
      .searchMovie(this.search)
      .subscribe(data => console.log(data));
  }
}
