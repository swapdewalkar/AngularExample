import { Component } from '@angular/core';
import { User } from './user';
import { UserDetailComponent } from './user-details.component';
import { UserService } from './user.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'users.component.html',
  styles: ['users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  constructor(
   private router: Router,
   private userService: UserService) { }

  title='User Manage';

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  users:User[];
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

   delete(user: User): void {
     this.userService
         .delete(user.id)
         .then(() => {
           this.users = this.users.filter(h => h !== user);
           if (this.selectedUser === user) { this.selectedUser = null; }
         });
   }
  ngOnInit(): void {
    this.getUsers();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
}
