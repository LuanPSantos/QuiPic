import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

    BASE_URL = 'http://localhost:3000';

    constructor(
        private http: HttpClient
    ) {

    }

    public postUser(user: User): Observable<any> {
        return this.http.post(this.BASE_URL + '/users', user);
    }

    public getUser(email: string, password: string): Observable<any> {
        return this.http
        .get(this.BASE_URL + '/users?email=' + email + '&password=' + password);
    }
}