import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
    constructor(
        public id: any
        , public name: string
        , public email: string
        , public password: string
        , public mobile: any
        , public type: boolean
    ) { }
}
@Injectable({
    providedIn: 'root'
})
export class HttpRegisterService {
    constructor(
        private httpClient: HttpClient
    ) {}

    public createUser(user) {
        return this.httpClient.post<User>("http://127.0.0.1:8000/" + "api/users/", user);
    }
}