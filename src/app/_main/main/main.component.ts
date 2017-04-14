import { Component, OnInit } from '@angular/core';


import { HeaderComponent } from '../header/header.component';
import { FooterComponent} from '../footer/footer.component';
import { SidebarComponent} from '../sidebar/sidebar.component';
import { LoginService } from '../../_shared/services/login.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HeaderComponent,FooterComponent,SidebarComponent],
})
export class MainComponent implements OnInit {

  private isLoggedin: boolean;
    role : string;

  constructor(public loginService: LoginService) { 

     // this.isLoggedin = loginService.loggedIn();
        // this.firstname = localStorage.getItem("username");
            this.role = localStorage.getItem("role")

       //console.log('service test', this.isLoggedin, loginService);
  }

//      isAuthenticated () {
//     return this.loginService.loggedIn();
// };

  ngOnInit() {

    // this.isAuthenticated ();
       // this.isAdministrateur();
       // this.isLoggedin = this.loginService.loggedIn();
        //location.reload();
        //console.log('service test 2', this.isLoggedin, this.loginService);
  }

}
