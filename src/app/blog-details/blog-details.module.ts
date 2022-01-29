import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { DetailsComponent } from './components/details/details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, BlogDetailsComponent, DetailsComponent, CommentsComponent, SidebarComponent],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule
  ],
  exports: [
    BlogDetailsComponent
  ]
})
export class BlogDetailsModule { }
