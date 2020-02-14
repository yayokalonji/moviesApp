import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styles: []
})
export class SlideComponent implements OnInit {

  @Input() public movies: any ;
  @Input() public title: string;

  constructor() { }

  ngOnInit() {
  }

}
