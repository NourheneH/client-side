import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register.component';
//import { AboutComponent } from './about/about.component';

// Route Configuration
export const routes: Routes = [
 { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent },
//  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);