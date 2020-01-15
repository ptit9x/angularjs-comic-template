import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displaySearchBar = false;
  menus = [
    {
      url: '/category',
      name: 'Tất cả',
    },
    {
      url: '/category',
      name: 'Tiên Hiệp',
    },
    {
      url: '/category',
      name: 'Kiếm Hiệp',
    },
    {
      url: '/category',
      name: 'Ngôn Tình',
    },
    {
      url: '/category',
      name: 'Đô Thị',
    },
    {
      url: '/category',
      name: 'Quan Trường',
    },
    {
      url: '/category',
      name: 'Võng Du',
    },
    {
      url: '/category',
      name: 'Khoa Huyễn',
    },
    {
      url: '/category',
      name: 'Huyền Huyễn',
    },
    {
      url: '/category',
      name: 'Dị Giới',
    },
    {
      url: '/category',
      name: 'Dị Năng',
    },
    {
      url: '/category',
      name: 'Quân Sự',
    },
    {
      url: '/category',
      name: 'Lịch Sử',
    },
    {
      url: '/category',
      name: 'Xuyên Không',
    },
    {
      url: '/category',
      name: 'Trọng Sinh',
    },
  ];

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}

  onSubmitSearch() {
    console.log('search');
  }
  showSearchBar() {
    this.displaySearchBar = true;
  }
  hideSearchBar() {
    this.displaySearchBar = false;
  }
}
