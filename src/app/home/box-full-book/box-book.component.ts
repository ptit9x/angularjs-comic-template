import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-box-full-book',
  templateUrl: './box-book.component.html',
  styleUrls: ['./box-book.component.scss']
})
export class BoxFullBookComponent implements OnInit {
  @Input() title: string;
  @Input() data;

  isLoading = false;

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
  }
}
