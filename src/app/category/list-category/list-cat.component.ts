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

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }
}
