import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/http-services/user.service';
import { StorageServie } from '../../app/http-services/storage.service';
import { User } from '../../app/models/user.model';
import { UserItem } from './user-item.model';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  search: string;
  buttonLabel: string = "Seguir";
  image: string = "data:image/png;base64,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";
  name: string = "Name";

  user: User;
  listUser: UserItem[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService: UserService,
    private storageService: StorageServie
  ) {
    this.user = this.storageService.getUser();
  }

  ionViewWillEnter () {
    // TODO buscar com filtro
    this.userService.getUsersFriends(this.user.id.toString()).subscribe((friends)=>{
      this.listUser = [];
      friends.forEach(friend => {
        let userItem = new UserItem();
        userItem.buttonLabel = Math.random() > 0.5 ? "Seguir" : "Deixar de seguir"
        userItem.image = friend.image;
        userItem.name = friend.name;
        userItem.id = friend.id;

        this.listUser = [...this.listUser, userItem];
      });
    });
  }

  onSearch(event){
    // TODO 
  }

  onNameClick(userId){
    this.navCtrl.push(ProfilePage, {userId: userId});
  }

  onToggleFollow(id){
    console.log(id);
  }
}


