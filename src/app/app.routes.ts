import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
//import { AboutComponent } from './about/about.component';

// Route Configuration
export const routes: Routes = [
 { path: 'register', component: RegisterComponent},
{ path: 'dashboard', component: DashboardComponent },
//  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);