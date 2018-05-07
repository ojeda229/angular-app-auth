import { Component, OnInit } from '@angular/core';
import { FormioAuthService, FormioAuthRegisterComponent } from 'angular-formio/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormioAuthRegisterComponent implements OnInit {

  constructor(public auth: FormioAuthService, private router: Router) {
    super(auth);
  }

  onSubmit(event) {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }
}

