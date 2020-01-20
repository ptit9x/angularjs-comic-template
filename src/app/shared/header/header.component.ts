import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public displaySearchBar = false;
  public displayBackTop = false;
  public menus = [
    {
      url: '/the-loai',
      name: 'Tất cả',
    },
    {
      url: '/the-loai/tien-hiep',
      name: 'Tiên Hiệp',
    },
    {
      url: '/the-loai/kiem-hiep',
      name: 'Kiếm Hiệp',
    },
    {
      url: '/the-loai/ngon-tinh',
      name: 'Ngôn Tình',
    },
    {
      url: '/the-loai/do-thi',
      name: 'Đô Thị',
    },
    {
      url: '/the-loai/quan-truong',
      name: 'Quan Trường',
    },
    {
      url: '/the-loai/vong-du',
      name: 'Võng Du',
    },
    {
      url: '/the-loai/khoa-huyen',
      name: 'Khoa Huyễn',
    },
    {
      url: '/the-loai/trong-sinh',
      name: 'Trọng Sinh',
    },
  ];
  public path = '';

  constructor(
    private route: Router,
  ) {}

  ngOnInit() {
    this.path = this.route.url;
    console.log(this.route.url, ' url');
  }

  onActiveMenu(item: string) {
    this.path = item || '/';
  }

  onSubmitSearch() {
    console.log('search');
  }
  showSearchBar() {
    this.displaySearchBar = true;
  }
  hideSearchBar() {
    this.displaySearchBar = false;
  }
  scrollTop() {
    window.scroll(0, 0);
    this.displayBackTop = false;
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY < 350) {
      this.displayBackTop = false;
    } else {
      this.displayBackTop = true;
    }
  }
}
