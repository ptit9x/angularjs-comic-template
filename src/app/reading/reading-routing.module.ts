import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '../shell/shell.service';
import { ReadingComponent } from './reading.component';

const routes: Routes = [
  Shell.childReadingRoutes([{ path: 'chuong/:id', component: ReadingComponent }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReadingRoutingModule {}
