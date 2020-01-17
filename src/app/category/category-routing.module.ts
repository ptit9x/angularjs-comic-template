import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  Shell.childRoutes([{
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
