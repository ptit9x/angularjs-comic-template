import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-box-top',
  templateUrl: './box-top.component.html',
  styleUrls: ['./box-top.component.scss']
})
export class BoxTopComponent implements OnInit {
  @Input() title: string;
  @Input() data: [];

  isLoading = false;

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
  }
}
