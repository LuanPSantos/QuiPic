import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Components
import { PostService } from './http-services/post.service';
import { CommentsPageModule } from '../pages/comments/comments.module';
import { HomePageModule } from '../pages/home/home.module';
import { PeoplePageModule } from '../pages/people/people.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostPageModule } from '../pages/new-post/new-post.module';
import { LoginPageModule } from '../pages/login/login.module';
import { UserService } from './http-services/user.service';
import { StorageServie } from './http-services/storage.service';
import { LoginService } from './http-services/login.service';

@NgModule({
  declarations: [
    MyApp 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TabsPageModule,
    LoginPageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostService,
    UserService,
    StorageServie,
    LoginService
  ]
})
export class AppModule {}
