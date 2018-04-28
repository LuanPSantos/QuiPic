import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewRegisterPage } from '../new-register/new-register';
import { LoginService } from '../../app/http-services/login.service';
import { HomePage } from '../home/home';
import { UserService } from '../../app/http-services/user.service';
import { StorageServie } from '../../app/http-services/storage.service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserService,
    private storageService: StorageServie
  ) {
  }

  ionViewDidLoad() {
  }

  openRegister() {
    this.navCtrl.push(NewRegisterPage);
  }

  login() {
    this.userService.getUser(this.email, this.password).subscribe((user) => {
      if(user[0]){
        this.storageService.saveUser(user[0]);
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

}
