import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';
import { PostModule } from '../../app/post-component/post.module';

@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentsPage),
    PostModule
  ],
  exports:[
    CommentsPage
  ]
})
export class CommentsPageModule {}
