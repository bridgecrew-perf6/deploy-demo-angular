import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ThoisuComponent } from './thoisu/thoisu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { TamsuComponent } from './tamsu/tamsu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrangchuComponent,
    ThoisuComponent,
    DangnhapComponent,
    GiaitriComponent,
    KinhdoanhComponent,
    LamdepComponent,
    TamsuComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
