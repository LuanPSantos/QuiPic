import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output()
  nameClick: EventEmitter<any> = new EventEmitter();

  constructor(private navCtrl: NavController) {
    
  }

  ngOnInit(){

  }

  onNameClick(){
    this.nameClick.emit();
  }
}