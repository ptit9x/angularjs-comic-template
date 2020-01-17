import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shared } from '../shared/shared.service';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  Shared.childRoutes([{
    path: 'the-loai',
    component: CategoryComponent
  },
  {
    path: 'the-loai/:slug',
    component: CategoryComponent
  },
  {
    path: 'the-loai/:slug/:categoryId',
    component: CategoryComponent
  }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoryRoutingModule { }
