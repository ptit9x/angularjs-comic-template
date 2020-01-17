import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-sidebar',
  templateUrl: './book-sidebar.component.html',
  styleUrls: ['./book-sidebar.component.scss']
})
export class BookSidebarComponent implements OnInit {
  public sameCategories;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('book-sidebar => book id', this.route.snapshot.params.id);
    // get API by same categories
    this.sameCategories = [{
      url: '/truyen/xin-chao-thieu-tuong-dai-nhan',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1577280861/truyen/xin-chao-thieu-tuong-dai-nhan.jpg',
      title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
      author: 'Hoa Dung Nguyệt Hạ',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
    },
    {
      url: '/truyen/xin-chao-thieu-tuong-dai-nhan',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1576247451/truyen/thanh-xuan-ngay-tho-tuoi-dep-cung-em.jpg',
      title: 'Thanh Xuân Ngây Thơ Tươi Đẹp Cùng Em',
      author: 'Hoa Dung Nguyệt Hạ',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
    }];
  }
}
