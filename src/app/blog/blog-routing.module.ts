import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog-component/blog.component';
import { ListPostsComponent } from './pages/list-Posts/list-Posts.component';
import { CardPostComponent } from './pages/card-Post/card-Post.component';

const routes: Routes = [
{
path:'blog',
component:BlogComponent
},
{
path:'listpost',
component:ListPostsComponent
},
{
path:'cards',
component:CardPostComponent
},
{
path:'**',
redirectTo:'blog'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
