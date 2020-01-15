import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { BoxFullBookComponent } from './box-full-book/box-book.component';
import { TopViewComponent } from '../shared/top-view/top-view.component';
import { NewComicComponent } from './new-comic/new-comic.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  declarations: [BoxFullBookComponent, TopViewComponent, NewComicComponent, HomeComponent]
})
export class HomeModule {}
