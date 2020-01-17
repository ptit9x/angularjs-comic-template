import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { BookComponent } from './book.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'truyen/:id', component: BookComponent }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BookRoutingModule {}
