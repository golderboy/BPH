import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPageModule } from '../pages/detail/detail.module'; //imd
import { TabsPageModule  } from '../pages/tabs/tabs.module';
import { DashbordPageModule } from '../pages/dashbord/dashbord.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { AvatarProvider } from '../providers/avatar/avatar';

import { HttpModule  } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    DetailPageModule,
    TabsPageModule,
    DashbordPageModule,
    SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvatarProvider
  ]
})
export class AppModule {}
