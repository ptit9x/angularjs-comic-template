import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { BoxTopComponent } from './box-top/box-top.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  declarations: [BoxTopComponent, HomeComponent]
})
export class HomeModule {}
