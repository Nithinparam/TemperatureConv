import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-compo',
  templateUrl: './two-compo.component.html',
  styleUrls: ['./two-compo.component.css']
})
export class TwoCompoComponent implements OnInit {
  cel: number;
  far: number;

  constructor() {}

  ngOnInit() {}
  farchange() {
    this.cel = (this.far - 32) * (5 / 9);
  }
  change() {
    this.far = this.cel * (9 / 5) + 32;
  }
}
