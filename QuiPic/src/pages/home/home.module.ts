import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { HomePage } from './home';
import { PostModule } from '../../app/post-component/post.module';
import { NewPostPage } from '../new-post/new-post';
import { NewPostPageModule } from '../new-post/new-post.module';
import { CommentsPageModule } from '../comments/comments.module';
import { CommentsPage } from '../comments/comments';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    PostModule,
    NewPostPageModule,
    CommentsPageModule
  ],
  entryComponents: [
    NewPostPage,
    CommentsPage
  ]
})
export class HomePageModule {}
