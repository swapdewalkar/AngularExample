import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { UserDetailComponent } from './user-details.component';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';

import { RouterModule }   from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      },
      {
        path: '',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
    ])
  ],
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
