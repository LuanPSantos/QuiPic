import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-picture-name',
  templateUrl: './picture-name.component.html'
})
export class PictureNameComponent {

  @Input()
  user: any;

  constructor(private navCtrl: NavController) {
    
  }

  ngOnInit(){

  }
}