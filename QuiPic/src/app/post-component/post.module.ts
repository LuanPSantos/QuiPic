import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { PostComponent } from './post.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    IonicModule.forRoot(PostComponent)
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule {}