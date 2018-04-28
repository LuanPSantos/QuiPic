import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { NewRegisterPageModule } from '../new-register/new-register.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    NewRegisterPageModule,
    FormsModule
  ],
})
export class LoginPageModule {}
