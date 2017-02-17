import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent} from './users/users.component';
import { UserDetailsComponent} from './user-details/user-details.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
//import { AboutComponent } from './about/about.component';

// Route Configuration
export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent},
  { path: '', component: LoginComponent },
  {path: 'user/:id', component: UserDetailsComponent},
  {path:'profile/:id', component: UserProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);