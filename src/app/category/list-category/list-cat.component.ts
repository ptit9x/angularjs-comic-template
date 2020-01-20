import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cat-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.scss']
})
export class ListCatComponent implements OnInit {
  @Input() list;
  @Input() categories;
  @Output() clickLink: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }

  onClick(e, item) {
    e.preventDefault();
    this.clickLink.emit(item);
  }
}
