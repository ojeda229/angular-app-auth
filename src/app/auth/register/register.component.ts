import { Component, OnInit } from '@angular/core';
import { FormioAuthService, FormioAuthRegisterComponent } from 'angular-formio/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormioAuthRegisterComponent implements OnInit {

  constructor(public auth: FormioAuthService) {
    super(auth);
  }

  ngOnInit() {
  }

}
