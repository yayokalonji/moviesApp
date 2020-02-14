import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  movie: any;
  backTo = '';
  search = '';

  constructor(
    public movieServices: MoviesService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(parametros => {
      this.backTo = parametros.page;
      if ( parametros.search ) {
        this.search = parametros.search;
      }
      this.movieServices
        .getMovie(parametros.id)
        .subscribe(data => (this.movie = data));
    });
  }

  ngOnInit() {}
}
