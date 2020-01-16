import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookHeaderComponent } from './book-header/book-header.component';
import { BookIntroduceComponent } from './book-introduce/book-introduce.component';
import { BookChapterComponent } from './book-chapter/book-chapter.component';
import { BookCommentComponent } from './book-comment/book-comment.component';
import { BookSidebarComponent } from './book-sidebar/book-sidebar.component';

@NgModule({
  imports: [CommonModule, BookRoutingModule],
  declarations: [
    BookComponent,
    BookHeaderComponent,
    BookIntroduceComponent,
    BookChapterComponent,
    BookCommentComponent,
    BookSidebarComponent,
  ]
})
export class BookModule { }
