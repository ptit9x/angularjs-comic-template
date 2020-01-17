import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shared } from '../shared/shared.service';
import { BookComponent } from './book.component';

const routes: Routes = [
  Shared.childRoutes([{ path: 'truyen/:id', component: BookComponent }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BookRoutingModule {}
