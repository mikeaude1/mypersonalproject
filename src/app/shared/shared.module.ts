import { BlogRoutingModule } from './../blog/blog-routing.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';

import { NgModule } from '@angular/core';
import { BlogModuleModule } from '../blog/blog.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
BlogModuleModule,
RouterModule,
BlogRoutingModule
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  bootstrap: [],
})
export class SharedModule { }
