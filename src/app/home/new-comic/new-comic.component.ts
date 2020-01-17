import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html',
  styleUrls: ['./new-comic.component.scss']
})
export class NewComicComponent implements OnInit {
  isLoading = false;
  newComics = [
    {
      url: '/truyen/xxx',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1577280861/truyen/xin-chao-thieu-tuong-dai-nhan.jpg',
      title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      chapters: [{
        link: '/book',
        name: 'Chương 158: Có người kế thừa'
      },
      {
        link: '/book',
        name: 'Chương 160: Chiêm ngưỡng thành quả chiến thắng'
      }],
    },
    {
      url: '/truyen/xxx',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1576247451/truyen/thanh-xuan-ngay-tho-tuoi-dep-cung-em.jpg',
      title: 'Thanh Xuân Ngây Thơ Tươi Đẹp Cùng Em',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      chapters: [{
        link: '/book',
        name: 'Chương 158: Có người kế thừa'
      },
      {
        link: '/book',
        name: 'Chương 160: Chiêm ngưỡng thành quả chiến thắng'
      }],
    },
    {
      url: '/truyen/xxx',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1576539180/truyen/lam-uyen-hanh.jpg',
      title: 'Lâm Uyên Hành',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      chapters: [{
        link: '/book',
        name: 'Quyển 2 - Chương 31: Thiếu'
      },
      {
        link: '/book',
        name: 'Quyển 2 - Chương 31: Thiếu'
      }],
    },
    {
      url: '/truyen/xxx',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1576539180/truyen/lam-uyen-hanh.jpg',
      title: 'Lâm Uyên Hành',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      chapters: [{
        link: '/book',
        name: 'Quyển 2 - Chương 31: Thiếu'
      },
      {
        link: '/book',
        name: 'Quyển 2 - Chương 31: Thiếu'
      }],
    }
  ];

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }
}
