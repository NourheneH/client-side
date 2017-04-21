import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AuthGuard} from './_shared/common/auth.guard';
/**
 * Authentification
 */
import {AuthComponent} from './authentification/auth/auth.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';

/**
 * Main
 */
import {MainComponent} from './_main/main/main.component';

/**
 * Dashboard
 */
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * User
 */
import { UsersComponent} from './users/users-list/users.component';
import { UserDetailsComponent} from './users/user-details/user-details.component';
import { UserProfileComponent} from './users/user-profile/user-profile.component';

/**
 * Tag
 */
import { TagsComponent} from './tags/tags-list/tags.component';
import {AddTagsComponent} from './tags/add-tags/add-tags.component';
import {UpdateTagsComponent} from './tags/update-tags/update-tags.component';
/**
 * Topic
 */
import {TopicsComponent} from './topics/topics-list/topics.component';
import {AddTopicComponent} from './topics/add-topic/add-topic.component';
import {TopicDetailsComponent} from './topics/topic-details/topic-details.component';


// Route Configuration
export const routes: Routes = [

  {
      path: 'auth',
      component: AuthComponent,
      children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent }
      ]
  },

  {
      path: '', 
      component: MainComponent,
      canActivate: [AuthGuard],
      children: [
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },

          { path: 'users', component: UsersComponent },
          { path: 'user/:id', component: UserDetailsComponent },
          { path : 'profile/:id', component: UserProfileComponent},
          
          { path: 'tags', component: TagsComponent},
          { path: 'tag', component: AddTagsComponent},
          { path: 'tag/:id', component: UpdateTagsComponent},

          { path: 'topics', component: TopicsComponent},
          { path: 'topic', component: AddTopicComponent},
          { path: 'topic/:id', component: TopicDetailsComponent},
        
          { path: '**', redirectTo: "dashboard" /*component: PageNotFoundComponent*/ }
          
      ]
  },
 // { path: '**', redirectTo: "" /*component: PageNotFoundComponent*/ }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);