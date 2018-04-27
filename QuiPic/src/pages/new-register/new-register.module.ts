import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRegisterPage } from './new-register';

@NgModule({
  declarations: [
    NewRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRegisterPage),
  ],
})
export class NewRegisterPageModule {}
