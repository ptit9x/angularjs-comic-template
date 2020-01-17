import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrls: ['./book-header.component.scss']
})
export class BookHeaderComponent implements OnInit {
  @Input() book;

  constructor() { }

  ngOnInit() { }
}
