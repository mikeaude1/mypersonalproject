import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './pages/homePage/homePage.component';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DxMenuModule, DxCheckBoxModule } from "devextreme-angular";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxCheckBoxModule,
    DxMenuModule,
    RouterModule,
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent
  ],
  bootstrap: [SidebarComponent],
})
export class SharedModule { }
