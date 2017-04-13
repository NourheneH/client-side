import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../_shared/services/login.service';
import { UserService } from '../../_shared/services/user.service';
import { User } from '../../_shared/models/users';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    user: User[];
    constructor(public router: Router, public loginService: LoginService, public userService: UserService, public zone: NgZone) {


    }

    ngOnInit() {

        this.user = JSON.parse(localStorage.getItem('currentuser'));


    }
    logout() {
        this.loginService.logout();
        this.router.navigate(['auth/login']);

    }



}
