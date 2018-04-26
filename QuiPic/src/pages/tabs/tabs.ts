import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  profilePage = ProfilePage;
  homePage = HomePage;
  peoplePage = PeoplePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter () {
    console.log('TabsPage');
  }
}
