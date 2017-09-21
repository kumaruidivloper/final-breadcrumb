import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <a routerLink="/signin" class="btn btn-block btn-primary">Sign In</a>
    <a routerLink="/signup" class="btn btn-block btn-primary">Sign Up</a>
  `
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
