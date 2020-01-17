import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-chapter',
  templateUrl: './book-chapter.component.html',
  styleUrls: ['./book-chapter.component.scss']
})
export class BookChapterComponent implements OnInit {
  @Input() chapters;

  constructor() { }

  ngOnInit() { }

  manualSearch() {
    console.log('search!');
  }

  goto(page) {
    console.log('go to ', page);
  }
}
