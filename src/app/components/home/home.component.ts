import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  billboard: any;
  popular: any;
  kidsPopular: any;

  constructor(public moviesService: MoviesService) {
    this.moviesService
      .getBillboard()
      // tslint:disable-next-line: no-string-literal
      .subscribe(data => (this.billboard = data['results']));

    this.moviesService
      .getPopular()
      // tslint:disable-next-line: no-string-literal
      .subscribe(data => (this.popular = data['results']));

    this.moviesService
      .getKidsPopular()
      // tslint:disable-next-line: no-string-literal
      .subscribe(data => (this.kidsPopular = data['results']));
  }

  ngOnInit() {}
}
