import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PostComponent } from './post.component';
import { PictureNameComponent } from './picture-name.component';
import { LikeComponent } from './like.component';

@NgModule({
  declarations: [
    PostComponent,
    PictureNameComponent,
    LikeComponent
  ],
  imports: [
    IonicModule.forRoot(PostComponent)
  ],
  exports: [
    PostComponent,
    PictureNameComponent,
    LikeComponent
  ]
})
export class PostModule {}