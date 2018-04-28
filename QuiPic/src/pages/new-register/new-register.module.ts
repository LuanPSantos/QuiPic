import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRegisterPage } from './new-register';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRegisterPage),
    FormsModule
  ],
})
export class NewRegisterPageModule {}
