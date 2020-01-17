import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public book;
  public chapters;
  public currentUrl: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.book = {
      url: '/truyen/xin-chao-thieu-tuong-dai-nhan',
      image: 'https://res.cloudinary.com/tncdn10/image/upload/v1577280861/truyen/xin-chao-thieu-tuong-dai-nhan.jpg',
      title: 'Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
      description: 'Có một phòng sách chỉ cho phép bạn ghé thăm lúc nửa đêm.',
      introduce: 'Mặt trăng tím kì lạ xuất hiện, và nền văn minh rực rỡ bậc nhất tàn lụi chỉ trong một đêm, kỷ nguyên mới ra đời...<br><br>Kỷ nguyên ZIYUE.<br><br>Hệ sinh thái bị đảo lộn, thỏ cắn chết người, thực vật dường như trở thành chúa tể, tiến hoá hỗn loạn, làm sao con người có thể tồn tại???<br><br>Mối quan hệ giữa mặt trăng tím và Ziyue là gì??<br><br>Bản đồ này là gì? Khu vực an toàn? Cánh đồng đang lơ lửng? Cảng bóng tối? Đi thuyền trong cơn bão? Kinh Thành nhà Trịnh?<br><br>Danh sách "Bài hát ru mang giai điệu khủng bố tinh thần"? Cuộc đua ngầm được hồi sinh, và thành phố ngầm đang bùng nổ? Một thị trường đen hỗn loạn trên toàn thế giới? Con đường đẫm máu?<br>Điều quan trọng nhất là giấc mơ cũng sẽ bị kìm hãm và đi vào miền của những giấc mơ? Ổn thôi, thời đại chết tiệt này.',
      author: 'Hoa Dung Nguyệt Hạ',
      authorTitle: 'Tìm các tác phẩm, truyện thơ do tác giả Hoa Dung Nguyệt Hạ sáng tác',
      authorUrl: '/tac-gia/hoa-dung-nguyet-ha/5be020cab19786223c89a0aa',
      status: 'Đang ra',
      category: {
        url: '/the-loai',
        name: 'Ngôn tình',
      },
      lastChapter: [{
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
        name: 'Chương 158: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
        name: 'Chương 157: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
        name: 'Chương 157: Có người kế thừa'
      }],
    };
    this.chapters = {
      total: 10,
      data: [
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 1: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 2: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 27: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 28: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 29: Có người kế thừa'
        },
        {
          link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
          name: 'Chương 30: Có người kế thừa'
        }
      ]
    };
  }
}
