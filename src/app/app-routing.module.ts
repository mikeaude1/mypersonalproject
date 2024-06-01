import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';

const routes: Routes = [
  {
  path:'home',
  component: HomePageComponent
  },
  {
  path:'about',
  component: AboutPageComponent
  },
  {
  path:'about',
  component: AboutPageComponent
  },
  {
  path:'blog',
  loadChildren:()=> import('./blog/blog.module').then(m => m.BlogModuleModule)
  },
  {
    path:'**',
    redirectTo:'home',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
