import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgViewModule } from './img-view/img-view.module'
import { ImgViewComponent } from './img-view/img-view.component'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ImgViewComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ImgViewModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
