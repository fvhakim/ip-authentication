import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend


import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import {  ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,

        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

   
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }