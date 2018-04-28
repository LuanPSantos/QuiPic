import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageServie } from '../../app/http-services/storage.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storageService: StorageServie) {
  }

  ionViewWillEnter () {
    console.log('ProfilePage');
  }

  logout(){
    this.storageService.removeUser();
    this.navCtrl.setRoot(LoginPage)
  }

}
