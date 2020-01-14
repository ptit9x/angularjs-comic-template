import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {
  version: string | null = 'v1.0';

  constructor() {}

  ngOnInit() {}
}
