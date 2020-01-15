import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.scss']
})
export class TopViewComponent implements OnInit {
  topViews = {
    title: 'Truyện đọc nhiều',
    data: [
      {
        url: '/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong',
        image: 'https://res.cloudinary.com/tncdn8/image/upload/v1571149285/truyen/nguoi-vo-no-le.jpg',
        title: 'Người Vợ Nô Lệ - BooMew',
        author: 'BooMew',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả BooMew sáng tác',
        authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa'
      },
      {
        url: '/linh-vu-thien-ha',
        image: 'https://res.cloudinary.com/tncdn2/image/upload/v1568449605/truyen/linh-vu-thien-ha.jpg',
        title: 'Linh Vũ Thiên Hạ - Vũ Phong',
        author: 'Vũ Phong',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Vũ Phong sáng tác',
        authorUrl: '/tac-gia/vu-phong/5bdecab406c7c41b7eea20b7'
      },
      {
        url: '/than-dao-dan-ton',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544573020/truyen/than-dao-dan-ton.jpg',
        title: 'Thần Đạo Đan Tôn - Cô Đơn Địa Phi',
        author: 'Cô Đơn Địa Phi',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Cô Đơn Địa Phi sáng tác',
        authorUrl: '/tac-gia/co-don-dia-phi/5bded41506c7c41b7eea36ec'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/than-khong-thien-ha',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544711852/truyen/than-khong-thien-ha.jpg',
        title: 'Than Khong Thien Ha - Nga Ban Thuan Khiet',
        author: 'Ngã Bản Thuần Khiết',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Ngã Bản Thuần Khiết sáng tác',
        authorUrl: '/tac-gia/nga-ban-thuan-khiet/5be0f00eb2242828641703f7'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
