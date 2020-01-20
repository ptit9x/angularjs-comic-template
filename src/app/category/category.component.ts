import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public list = [];
  public categories = [];
  public currentCategory = null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    /* just dummny, you need to get from API*/
    const dummyList = [
      {
        id: '5bdec66306c7c41b7eea0fe4',
        slug: 'moi-cap-nhat',
        title: 'Truyện mới cập nhật',
        name: 'Truyện mới cập nhật',
        description: '',
      },
      {
        id: '5bdec66306c7c41b7eea0fe4',
        slug: 'truyen-hot',
        title: 'Truyện hot',
        name: 'Truyện hot',
        description: '',
      },
      {
        id: '5bdec66306c7c41b7eea0fe4',
        slug: 'truyen-full',
        title: 'Truyện full',
        name: 'Truyện full',
        description: '',
      },
    ];
    const dummyCategories = [{
      id: undefined,
      slug: undefined,
      title: 'Tất cả truyện',
      name: 'Tất cả',
      description: '',
    },
    {
      slug: 'tien-hiep',
      id: '5bdec66306c7c41b7eea0fe4',
      title: 'Truyện Tiên Hiệp',
      name: 'Tiên Hiệp',
      description: 'Những truyện có nội dung chủ yếu diễn ra trong môi trường đô thị hiện đại, thành phố.',
    },
    {
      slug: 'kiem-hiep',
      id: '5be109e6b22428286417369f',
      title: 'Truyện Kiếm Hiệp',
      name: 'Kiếm Hiệp',
      description: 'Những truyện Kiếm Hiệp',
    },
    {
      slug: 'ngon-tinh',
      id: '5be109e6b22428286417369f',
      title: 'Truyện Ngôn Tình',
      name: 'Ngôn Tình',
      description: 'Những truyện Ngôn Tình',
    }];
    this.list = dummyList.map((v) => {
      const clone = Object.assign(v);
      const {slug, id} = v;
      clone.url = (slug && id) ? `/the-loai/${slug}/${id}` : '/the-loai';
      clone.active = (this.route.snapshot.params.slug === slug);
      return clone;
    });
    this.categories = dummyCategories.map((v) => {
      const clone = Object.assign(v);
      const {slug, id} = v;
      clone.url = (slug && id) ? `/the-loai/${slug}/${id}` : '/the-loai';
      clone.active = (this.route.snapshot.params.slug === slug && this.route.snapshot.params.categoryId === id);
      return clone;
    });
    this.currentCategory = [...dummyList, ...dummyCategories].find(v => this.route.snapshot.params.slug === v.slug);
  }

  onClickLink(data) {
    this.list = this.list.map(v => { v.active = false; return v; });
    this.categories = this.categories.map(v => { v.active = false; return v; });
    this.currentCategory = data;
  }
}
