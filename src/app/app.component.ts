import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <h1>My Breadcrumb</h1>
    <breadcrumb></breadcrumb>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
