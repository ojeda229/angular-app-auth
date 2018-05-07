import { Component, OnInit } from '@angular/core';
import { FormioAuthService, FormioAuthLoginComponent } from 'angular-formio/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormioAuthLoginComponent implements OnInit {

  constructor(public auth: FormioAuthService, private router: Router) {
    super(auth);
  }

  onSubmit(event) {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }
}
