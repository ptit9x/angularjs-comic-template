import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shared } from '../shared/shared.service';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  Shared.childRoutes([{ path: '**', component: NotFoundComponent, data: { title: 'Not Found' } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NotFoundRoutingModule {}
