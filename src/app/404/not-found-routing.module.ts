import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  Shell.childRoutes([{ path: '**', component: NotFoundComponent, data: { title: 'Not Found' } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NotFoundRoutingModule {}
