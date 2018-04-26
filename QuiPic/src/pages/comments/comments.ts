import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter () {
    console.log('CommentsPage');
  }

}
