import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';

@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentsPage),
  ],
  exports:[
    CommentsPage
  ]
})
export class CommentsPageModule {}
