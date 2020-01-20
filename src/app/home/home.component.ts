import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hots = {
    title: 'Truyện Hot',
    data: [
      {
        url: '/truyen/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong',
        image: 'https://res.cloudinary.com/tncdn3/image/upload/v1568457886/truyen/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong.jpg',
        title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
        rate: '5',
        author: 'Hoa Dung Nguyệt Hạ',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
        authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa'
      },
      {
        url: '/truyen/linh-vu-thien-ha',
        image: 'https://res.cloudinary.com/tncdn2/image/upload/v1568449605/truyen/linh-vu-thien-ha.jpg',
        title: 'Linh Vũ Thiên Hạ - Vũ Phong',
        rate: '4',
        author: 'Vũ Phong',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Vũ Phong sáng tác',
        authorUrl: '/tac-gia/vu-phong/5bdecab406c7c41b7eea20b7'
      },
      {
        url: '/truyen/than-dao-dan-ton',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544573020/truyen/than-dao-dan-ton.jpg',
        title: 'Thần Đạo Đan Tôn - Cô Đơn Địa Phi',
        rate: '3',
        author: 'Cô Đơn Địa Phi',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Cô Đơn Địa Phi sáng tác',
        authorUrl: '/tac-gia/co-don-dia-phi/5bded41506c7c41b7eea36ec'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '2',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/than-khong-thien-ha',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544711852/truyen/than-khong-thien-ha.jpg',
        title: 'Than Khong Thien Ha - Nga Ban Thuan Khiet',
        rate: '1',
        author: 'Ngã Bản Thuần Khiết',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Ngã Bản Thuần Khiết sáng tác',
        authorUrl: '/tac-gia/nga-ban-thuan-khiet/5be0f00eb2242828641703f7'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '0',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '1',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '4',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '4',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '0',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '4',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        rate: '4',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      }
    ]
  };
  public bestauthor = {
    title: 'Truyện nguyễn nhật ánh',
    data: [
      {
        url: '/truyen/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong',
        image: 'https://res.cloudinary.com/tncdn3/image/upload/v1568457886/truyen/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong.jpg',
        title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
        author: 'Hoa Dung Nguyệt Hạ',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
        authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa'
      },
      {
        url: '/truyen/linh-vu-thien-ha',
        image: 'https://res.cloudinary.com/tncdn2/image/upload/v1568449605/truyen/linh-vu-thien-ha.jpg',
        title: 'Linh Vũ Thiên Hạ - Vũ Phong',
        author: 'Vũ Phong',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Vũ Phong sáng tác',
        authorUrl: '/tac-gia/vu-phong/5bdecab406c7c41b7eea20b7'
      },
      {
        url: '/truyen/than-dao-dan-ton',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544573020/truyen/than-dao-dan-ton.jpg',
        title: 'Thần Đạo Đan Tôn - Cô Đơn Địa Phi',
        author: 'Cô Đơn Địa Phi',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Cô Đơn Địa Phi sáng tác',
        authorUrl: '/tac-gia/co-don-dia-phi/5bded41506c7c41b7eea36ec'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/than-khong-thien-ha',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544711852/truyen/than-khong-thien-ha.jpg',
        title: 'Than Khong Thien Ha - Nga Ban Thuan Khiet',
        author: 'Ngã Bản Thuần Khiết',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Ngã Bản Thuần Khiết sáng tác',
        authorUrl: '/tac-gia/nga-ban-thuan-khiet/5be0f00eb2242828641703f7'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108'
      }
    ]
  };
  completed = {
    title: 'Truyện đã hoàn thành',
    data: [
      {
        url: '/truyen/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong',
        image: 'https://res.cloudinary.com/tncdn3/image/upload/v1568457886/truyen/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong.jpg',
        title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
        author: 'Hoa Dung Nguyệt Hạ',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
        authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
        fullLabel: 'Full - 268 chương',
      },
      {
        url: '/truyen/linh-vu-thien-ha',
        image: 'https://res.cloudinary.com/tncdn2/image/upload/v1568449605/truyen/linh-vu-thien-ha.jpg',
        title: 'Linh Vũ Thiên Hạ - Vũ Phong',
        author: 'Vũ Phong',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Vũ Phong sáng tác',
        authorUrl: '/tac-gia/vu-phong/5bdecab406c7c41b7eea20b7',
        fullLabel: 'Full - 37 chương',
      },
      {
        url: '/truyen/than-dao-dan-ton',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544573020/truyen/than-dao-dan-ton.jpg',
        title: 'Thần Đạo Đan Tôn - Cô Đơn Địa Phi',
        author: 'Cô Đơn Địa Phi',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Cô Đơn Địa Phi sáng tác',
        authorUrl: '/tac-gia/co-don-dia-phi/5bded41506c7c41b7eea36ec',
        fullLabel: 'Full - 37 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 10 chương',
      },
      {
        url: '/truyen/than-khong-thien-ha',
        image: 'https://res.cloudinary.com/truyennhieu-images/image/upload/v1544711852/truyen/than-khong-thien-ha.jpg',
        title: 'Than Khong Thien Ha - Nga Ban Thuan Khiet',
        author: 'Ngã Bản Thuần Khiết',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Ngã Bản Thuần Khiết sáng tác',
        authorUrl: '/tac-gia/nga-ban-thuan-khiet/5be0f00eb2242828641703f7'
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 9 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 100 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 9999 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 7864 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 34345 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 13 chương',
      },
      {
        url: '/truyen/dau-pha-thuong-khung',
        image: 'https://res.cloudinary.com/tncdn1/image/upload/v1568448256/truyen/dau-pha-thuong-khung.jpg',
        title: 'Đấu Phá Thương Khung - Thiên Tàm Thổ Đậu',
        author: 'Thiên Tàm Thổ Đậu',
        authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Thiên Tàm Thổ Đậu sáng tác',
        authorUrl: '/tac-gia/thien-tam-tho-dau/5bdfb4108ee5f91f32994108',
        fullLabel: 'Full - 14 chương',
      }
    ]
  };

  constructor() { }

  ngOnInit() { }
}
