import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { StorageServie } from './storage.service';
import { NavController } from 'ionic-angular';

@Injectable()
export class LoginService {

    BASE_URL = 'http://localhost:3000';

    constructor(
        private http: HttpClient,
        private userService: UserService,
        private storageService: StorageServie
    ) {

    }

    public login(email: string, password: string, callback: Function) {
        
    }

    public logout() {
        this.storageService.removeUser();
    }
}