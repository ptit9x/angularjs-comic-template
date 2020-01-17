import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnChanges {
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
    },
    {
      slug: 'ngon-tinh',
      id: '5be109e6b22428286417369f',
      title: 'Truyện Ngôn Tình',
      name: 'Ngôn Tình',
    }];
    this.list = dummyList.map(({ id, slug, title, name }) => ({
      url: (slug && id) ? `/the-loai/${slug}/${id}` : '/the-loai',
      title,
      name,
      active: (this.route.snapshot.params.slug === slug),
    }));
    this.categories = dummyCategories.map(({ id, slug, title, name }) => ({
      url: (slug && id) ? `/the-loai/${slug}/${id}` : '/the-loai',
      title,
      name,
      active: (this.route.snapshot.params.slug === slug && this.route.snapshot.params.categoryId === id),
    }));
    this.currentCategory = [...dummyList, ...dummyCategories].find(v => this.route.snapshot.params.slug === v.slug);
  }

  ngOnChanges() {
    console.log('aaaaaaaaaaaaaaa');
  }
}
