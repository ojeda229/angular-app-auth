import { Component, OnInit } from '@angular/core';
import { FormioAuthService, FormioAuthLoginComponent } from 'angular-formio/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormioAuthLoginComponent implements OnInit {

  constructor(public auth: FormioAuthService) {
    super(auth);
  }

  ngOnInit() {
  }

}
