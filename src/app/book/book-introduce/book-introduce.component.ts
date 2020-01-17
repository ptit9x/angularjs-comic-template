import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-introduce',
  templateUrl: './book-introduce.component.html',
  styleUrls: ['./book-introduce.component.scss']
})
export class BookIntroduceComponent implements OnInit {
  @Input() book;
  public showFullDesc: boolean;

  constructor() { }

  ngOnInit() {
    this.showFullDesc = !(this.book.introduce && this.book.introduce.length > 100);
  }

  toggleDesc() {
    this.showFullDesc = true;
  }
}
