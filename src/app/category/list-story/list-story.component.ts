import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.scss']
})
export class ListStoryComponent implements OnInit {
  @Input() currentCategory;

  public category;
  public books;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const { id, slug, title, description } = this.currentCategory;
    const url = `/the-loai/${slug}/${id}`;
    this.category = {
      id,
      url,
      title,
      description,
    };

    this.books = [{
      url: '/truyen/xin-chao-thieu-tuong-dai-nhan',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1577280861/truyen/xin-chao-thieu-tuong-dai-nhan.jpg',
      title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
      description: 'Có một phòng sách chỉ cho phép bạn ghé thăm lúc nửa đêm.',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      lastChapter: {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
        name: 'Chương 158: Có người kế thừa'
      },
    },
    {
      url: '/truyen/xin-chao-thieu-tuong-dai-nhan',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1576247451/truyen/thanh-xuan-ngay-tho-tuoi-dep-cung-em.jpg',
      title: 'Thanh Xuân Ngây Thơ Tươi Đẹp Cùng Em',
      description: 'Khi con người không còn cảm giác "sợ hãi", bạn có tưởng tượng được không?',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      lastChapter: {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
        name: 'Chương 158: Có người kế thừa'
      },
    }];
  }
}
