import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { Shell } from '../shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomeComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
