import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { PeoplePage } from '../people/people';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  profilePage = ProfilePage;
  homePage = HomePage;
  peoplePage = PeoplePage;

  constructor() {

  }
}
