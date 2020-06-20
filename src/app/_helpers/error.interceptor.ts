import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../_services';

import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService, private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        return next.handle(request).pipe(catchError(err => {
    

                this.alertService.error("Your IP is not trusted, you need to login with your uername and password", false);
            
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
        
    }
}