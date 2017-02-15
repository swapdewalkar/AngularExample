import { Component } from '@angular/core';
import { User } from './user';
import { UserDetailComponent } from './user-details.component';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
  <h1 >{{title}}</h1>
  <h2>My Users</h2>
  <ul class="users">
    <li *ngFor="let user of users" (click)="onSelect(user)" [class.selected]="hero === selectedHero">
      <span class="badge">{{user.id}}</span> {{user.name}}
    </li>
  </ul>

  <my-user-detail [user]="selectedUser"></my-user-detail>
   `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) { }

  title='User Manage';

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  users:User[];
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
