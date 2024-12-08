import { BlogRoutingModule } from './../blog/blog-routing.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component'

import { NgModule } from '@angular/core';
import { BlogModuleModule } from '../blog/blog.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ProyectosComponent,
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
    ProyectosComponent,
  ],
  bootstrap: [],
})
export class SharedModule { }
