import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {
  public readSetting: boolean;
  public themeSetting: string;
  public fontSetting: string;
  public sizeSetting: number;
  public alignSetting: string;
  public readChapterMenu: boolean;
  public displayChaperSearch: boolean;
  public reading;
  public chapters;
  public currentUrl: string;
  public displayControlAction: boolean;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.readSetting = false;
    this.themeSetting = 'style-white';
    this.fontSetting = 'f-bookerly';
    this.sizeSetting = 18;
    this.alignSetting = 't-align-left';
    this.readChapterMenu = false;
    this.displayChaperSearch = false;
    this.displayControlAction = true;
    const bookId = this.route.snapshot.params.id;
    this.currentUrl = `/chuong/${bookId}`;
    // call API for this
    this.reading = {
      title: 'Chương 1: Đừng thiêu ta!',
      book: {
        url: '/truyen/xin-chao-thieu-tuong-dai-nhan',
        name: 'Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương - Hoa Dung Nguyệt Hạ',
      },
      content: `Với gương mặt đẫm nước mắt, Chu Trạch từ từ ngẩng đầu lên và soi mình trong gương, anh cảm thấy mình
      khá tiều tụy, nhưng suy nghĩ lại với tư cách là một bác sĩ khoa cấp cứu thì dáng vẻ như thế này cũng
      khá phù hợp. <br><br>Đứng trước cửa phòng vệ sinh nam, y tá Vương Nhã hét lên "Bác sĩ Chu, có một bệnh
      nhân mới nhập viện, hình như ngã từ trên lầu xuống, không biết đó có phải là tự sát không!"
      <br><br>Nghe thấy tiếng gọi của y tá, Chu Trạch nhanh chóng lấy khăn lau khô mặt và đi ra ngoài"Tôi
      đến ngay đây." <br><br>Chiếc xe cứu thương đưa bệnh nhân đã đến. Nằm trên xe là một người đàn ông đã
      già, trên người còn mặc bộ đồ tang màu xám. Khắp người dính đầy máu đen cùng với những cơn ho dồn dập.
      <br><br>Chu Trạch tiếp nhận bệnh nhân và nhanh chóng đẩy xe về phía phòng mổ. Anh ta vừa đẩy vừa hét
      lớn "Chuẩn bị dụng cụ phẫu thuật, nhanh lên!" <br><br>Tình hình rất xấu vì bệnh nhân bị thương rất
      nặng. <br><br>"Tôi...Tôi...Tôi không muốn chết." <br><br>Người đàn ông nhìn về phía Chu Trạch nói với
      giọng điệu khẩn thiết. <br><br>"Ông an tâm, ông sẽ không sao, sẽ qua khỏi thôi. Chúng tôi sẽ không để
      ông chết" <br><br>Đây là lúc rất nguy kịch nếu không cấp cứu kịp thời bệnh nhân có thể sẽ tử vong và
      hầu hết không ai muốn điều đó xảy ra. Và các bác sĩ càng áp lực hơn khi nghe được những lời cầu cứu từ
      bệnh nhân. Điều cần làm làm lúc này là an ủi bệnh nhân, trấn an tình thần họ.`
    };
    this.chapters = [
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 1: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-1',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 2: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 27: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 28: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 29: Có người kế thừa'
      },
      {
        link: '/chuong/xin-chao-thieu-tuong-dai-nhan-2',
        name: 'Chương 30: Có người kế thừa'
      }
    ];
  }

  toggleSetting() {
    this.readSetting = !this.readSetting;
    this.readChapterMenu = false;
  }

  updateTheme(v: string) {
    this.themeSetting = v;
  }

  updateFont(v: string) {
    this.fontSetting = v;
  }

  decreaseFontSize() {
    this.sizeSetting = (this.sizeSetting > 14) ? (this.sizeSetting - 2) : 14;
  }

  increaseFontSize() {
    this.sizeSetting = (this.sizeSetting < 26) ? (this.sizeSetting + 2) : 26;
  }

  updateTextAlign(v) {
    this.alignSetting = v;
  }

  toggleChapterMenu() {
    this.readChapterMenu = !this.readChapterMenu;
    this.readSetting = false;
  }

  showChapterSearch() {
    this.displayChaperSearch = true;
  }

  hideChapterSearch() {
    this.displayChaperSearch = false;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY === 0) {
      this.displayControlAction = true;
    } else {
      this.displayControlAction = false;
    }
  }
}
