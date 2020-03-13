import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../auth/auth.service';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService, private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.auth.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `bearer ${currentUser.token}`
                }
            });
        }
        
        return next.handle(request)
        // .pipe(
        //     retry(1),
        //     catchError((err: HttpErrorResponse) => {
        //         try {
        //             debugger;
        //             if (err.status === 401) {
        //                 //Token Expired
        //                 //Show Toast
        //                 //Redirect to Login Page
        //                 this.auth.logout();
        //                 this.router.navigate(['/login']);
        //             }
        //             else {
        //                 // this.toasterService.error(err.message, err.statusText, { positionClass: 'toast-bottom-center' });
        //                 SharedDataExchangeService.getInstance().ShowErrorNotification
        //                     (new ErrorNotification(ErrorNotificationType.Error, err.message, '', err.statusText));
        //             }
        //             // this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
        //         } catch (e) {
        //             //Show Toast
        //             return throwError(err);

        //             //this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
        //         }
        //     }));
    }
}