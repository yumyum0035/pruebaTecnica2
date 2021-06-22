import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private users: UsersService,
    private router: Router
  ) {}

  registerForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  ngOnInit(): void {}

  submit() {
    let newUser: User = {
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
    };

    this.users.register(newUser);
    console.log('registered successfully!');
    this.router.navigate(['/login']);
  }
}
