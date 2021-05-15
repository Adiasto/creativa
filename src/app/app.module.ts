import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './home/gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBannerComponent,
    HeaderComponent,
    AboutComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
