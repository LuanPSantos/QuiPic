import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeoplePage } from './people';
import { UserItemComponent } from './user-item.component';

@NgModule({
  declarations: [
    PeoplePage,
    UserItemComponent
  ],
  imports: [
    IonicPageModule.forChild(PeoplePage),
  ],
})
export class PeoplePageModule {}
