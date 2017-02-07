import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-header',
    moduleId: 'module.id',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    private isLoggedin: boolean;
    private firstname: string;

    constructor(public router: Router, public loginService: LoginService) {
        this.isLoggedin = loginService.loggedIn();
        this.firstname = localStorage.getItem("username");
    }

    logout() {
        this.loginService.logout();
    }

    toggleNav(id) {
        let target = document.querySelector('#' + id);
        target.className = target.className.indexOf('open') >= 0 ? "profile dropdown" : "profile dropdown open";
    }

}
