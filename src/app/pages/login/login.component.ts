import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private users: UsersService) {}

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  needNewUser: boolean = false;

  ngOnInit(): void {}

  handleClick() {
    let userLogging: User = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };
    this.users.login(userLogging);
    this.needNewUser = this.users.needNewUser;
  }
}
