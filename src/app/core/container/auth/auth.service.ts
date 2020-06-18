import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../Models/user';
import { environment } from "../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

   // 'https://login-a678d.firebaseio.com/details.json'

    login(userCode: string, password: string) {
        return this.http.post<any>(`${environment.LogIn}/details.json`, { userCode, password})
            .pipe(map(data => {

                const user: User = new User();
                user.userCode = data.userCode;
                user.password = data.password;

                localStorage.setItem('currentUser', JSON.stringify(data));
                this.currentUserSubject.next(user);
                return user;
            }

            ));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    isLoggedIn() {
        if (this.currentUserSubject.value != null) {
            return true;
        } else {
            return false;
        }
    }
}