import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private router: Router) {}

  needNewUser: boolean = false;

  registeredUsers: User[] = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users') || '{}', (key, value) => {
        return value;
      })
    : [];

  isLogged: boolean = localStorage.getItem('logged')
    ? JSON.parse(localStorage.getItem('logged') || '{}')
    : false;

  login(user: User) {
    let compareUsers = this.registeredUsers.find(
      (u: User) => u.email === user.email
    );
    if (compareUsers) {
      console.log(`I found this user: ${compareUsers.email}`);

      if (compareUsers.password === user.password) {
        this.router.navigate(['/starships']);
        localStorage.setItem('logged', 'true');
        this.isLogged = localStorage.getItem('logged')
          ? JSON.parse(localStorage.getItem('logged') || '{}')
          : true;
      } else {
        console.log('wrong password!');
      }
    } else {
      this.needNewUser = true;
    }
  }

  register(user: User) {
    if (!this.registeredUsers.find((u: User) => u.email === user.email)) {
      //if the user is not registered, adds it to the array
      this.registeredUsers.push(user);
    }

    localStorage.setItem('users', JSON.stringify(this.registeredUsers));
    console.log(this.registeredUsers);
  }
}
