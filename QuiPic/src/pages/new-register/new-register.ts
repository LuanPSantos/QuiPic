import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../app/models/user.model';
import { TempUtil } from '../../app/models/temp.util';
import { UserService } from '../../app/http-services/user.service';
import { StorageServie } from '../../app/http-services/storage.service';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-new-register',
  templateUrl: 'new-register.html',
})
export class NewRegisterPage {

  registerForm: FormGroup;
  confirmPassword: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    fb: FormBuilder,
    private userService: UserService,
    private storageService: StorageServie
  ) {

    this.registerForm = this.createFormGroup(fb);
    this.matchPassword();
  }

  ionViewDidLoad() {
  }

  register() {
    let user: User = this.convertFormToUser(this.registerForm);
    this.userService.postUser(user).subscribe((user) => {
      this.storageService.saveUser(user);
      this.navCtrl.setRoot(TabsPage);
    });
  }

  createFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      image: [''],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(3)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(3)])]
    });
  }

  convertFormToUser(formGroup: FormGroup): User {
    let user = new User();
    user.id = new TempUtil().createId();
    user.name = this.registerForm.get('name').value;
    user.email = this.registerForm.get('email').value;
    user.password = this.registerForm.get('password').value;
    user.image = this.registerForm.get('image').value;
    return user;
  }

  matchPassword(){
    this.registerForm.get('confirmPassword').valueChanges.subscribe((value) => {
      if(value != this.registerForm.get('password').value){
        this.registerForm.get('confirmPassword').setErrors({incorrect: true});
      }else{
        this.registerForm.get('confirmPassword').setErrors(null);
      }
    });
  }
}
