import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';

import { AlertService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.alertService.success("You're logged in - Enjoy!", false);


    }

    ngOnInit() {

    }

}