import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { LoginService } from './services/login.service';

import './operators';

@Component({
    selector: "app-root",
    moduleId: 'module.id',
    providers: [HeaderComponent,FooterComponent,SidebarComponent],
    templateUrl: './app.component.html',
    //template:`<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    private isLoggedin: boolean;
    constructor(public loginService: LoginService) {
       // this.isLoggedin = loginService.loggedIn();
        // this.firstname = localStorage.getItem("username");


       //console.log('service test', this.isLoggedin, loginService);

    }
    isAuthenticated () {
    return this.loginService.loggedIn();
};

    ngOnInit() {
        this.isAuthenticated ();
       // this.isLoggedin = this.loginService.loggedIn();
        //location.reload();
        //console.log('service test 2', this.isLoggedin, this.loginService);
    }

}


