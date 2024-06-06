import { BlogComponent } from './components/blog-component/blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ListPostsComponent } from './pages/list-Posts/list-Posts.component';
import { CardPostComponent } from './pages/card-Post/card-Post.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    BlogPostComponent,
    ListPostsComponent,
    CardPostComponent
  ]
})
export class BlogModuleModule { }
