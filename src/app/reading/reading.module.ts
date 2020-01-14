import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingRoutingModule } from './reading-routing.module';
import { ReadingComponent } from './reading.component';

@NgModule({
  imports: [CommonModule, ReadingRoutingModule],
  declarations: [ReadingComponent]
})
export class ReadingModule {}
