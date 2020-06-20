import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      

        if (localStorage.getItem('currentUser')) {

            return true;
        }
    
        this.authenticationService.login("ip.serviceaccount@fhakim-demo.com", "IloveOkta123!");
        this.router.navigate(['/login']);
      
        return false;
    }
}