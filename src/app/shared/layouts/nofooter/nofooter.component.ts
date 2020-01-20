import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-nofooter',
  templateUrl: './nofooter.component.html',
})
export class NoFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onScroll() {
    console.log('11111');
  }
}
