import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService } from '../_services';
import { catchError } from 'rxjs/operators';
import { Constants } from "./../constants";

@Injectable()
export class AuthenticationService {
    constructor(private alertService: AlertService, private router: Router, private http: HttpClient) { }

   
     login(username: string, password: string)   {

                let headers = new HttpHeaders();
               let body  = JSON.stringify({
               "username": username,
               "password": password,
               "options": {
               "multiOptionalFactorEnroll": "false",
               "warnBeforePasswordExpired": "false"
             }
           });
         
               headers.append('Accept', 'application/json');
               headers.append('Content-Type', 'application/json');
         
                this.http.post(Constants.oktaOrg + "api/v1/authn", JSON.parse(body), {headers})
               
                .subscribe (response => {
                
                  let object = JSON.parse(JSON.stringify(response));

                  let status : string = object.status;                  

                   if (status!= null && status == "SUCCESS")
                   {
                    localStorage.setItem('currentUser', JSON.stringify({ "sessionToken" : object.sessionToken, "firstName" : object._embedded.user.profile.firstName, "lastName" : object._embedded.user.profile.lastName, "username": object._embedded.user.profile.login, "id": object._embedded.user.id }));
                   
                    this.router.navigate(['']);
                     
                  //localStorage.setItem('state','1223344');
                  //window.location.href = "https://fhakim.okta.com/oauth2/default/v1/authorize?client_id=0oafz6davPT5Y0LyJ4x6&nonce=1234&redirect_uri=http%3A%2F%2Flocalhost%3A8080&response_mode=fragment&response_type=token&state=1223344&scope=openid%20profile&sessionToken=" + object.sessionToken ;
                

                   }              
                   
                   else
                   {
                     console.log("sdsdsd");
                    this.router.navigate(['/login']); 
                    this.alertService.error("Fuck you!!", false);
                    
                   }
                               

            });
          

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('state');
    }
}