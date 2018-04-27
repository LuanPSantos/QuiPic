import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-picture-name',
  templateUrl: './picture-name.component.html'
})
export class PictureNameComponent {

  @Input()
  image: string;
  @Input()
  name: string;

  constructor(private navCtrl: NavController) {
    
  }

  ngOnInit(){

  }
}