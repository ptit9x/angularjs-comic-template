import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent, NoFooterComponent } from './layouts';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, NgxSpinnerModule],
  declarations: [HeaderComponent, FooterComponent, FullComponent, NoFooterComponent]
})
export class SharedModule {}
