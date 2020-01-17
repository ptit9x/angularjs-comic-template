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
      url: '/the-loai',
      name: 'Tất cả',
    },
    {
      url: '/the-loai',
      name: 'Tiên Hiệp',
    },
    {
      url: '/the-loai',
      name: 'Kiếm Hiệp',
    },
    {
      url: '/the-loai',
      name: 'Ngôn Tình',
    },
    {
      url: '/the-loai',
      name: 'Đô Thị',
    },
    {
      url: '/the-loai',
      name: 'Quan Trường',
    },
    {
      url: '/the-loai',
      name: 'Võng Du',
    },
    {
      url: '/the-loai',
      name: 'Khoa Huyễn',
    },
    {
      url: '/the-loai',
      name: 'Huyền Huyễn',
    },
    {
      url: '/the-loai',
      name: 'Dị Giới',
    },
    {
      url: '/the-loai',
      name: 'Dị Năng',
    },
    {
      url: '/the-loai',
      name: 'Quân Sự',
    },
    {
      url: '/the-loai',
      name: 'Lịch Sử',
    },
    {
      url: '/the-loai',
      name: 'Xuyên Không',
    },
    {
      url: '/the-loai',
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
