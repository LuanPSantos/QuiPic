import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class StorageServie {

    constructor(){}

    public saveUser(user: User){
        localStorage.setItem('user', JSON.stringify(user));
    }

    public getUser(): User{
        return JSON.parse(localStorage.getItem('user')) as User;
    }

    public removeUser() {
        localStorage.removeItem('user');
    }
}