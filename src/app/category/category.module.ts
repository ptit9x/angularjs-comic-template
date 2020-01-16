import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ListStoryComponent } from './list-story/list-story.component';
import { ListCatComponent } from './list-category/list-cat.component';

@NgModule({
  imports: [CommonModule, CategoryRoutingModule],
  declarations: [CategoryComponent, ListStoryComponent, ListCatComponent]
})
export class CategoryModule {}
