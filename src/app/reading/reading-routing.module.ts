import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shared } from '../shared/shared.service';
import { ReadingComponent } from './reading.component';

const routes: Routes = [
  Shared.childReadingRoutes([{ path: 'chuong/:id', component: ReadingComponent }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReadingRoutingModule {}
