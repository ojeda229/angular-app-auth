import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../../../config';
import { Router } from '@angular/router';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  query = {};
  passwordForm = {};
  passwordEmbedURL =  AppConfig.appUrl + '/resetpassword';
  constructor( public auth: FormioAuthService, private router: Router ) {
    location.search.substr(1).split("&").forEach((item) => {
      this.query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
    });
    const hasToken = localStorage.getItem('formioToken');
    if (this.query['token'] && !hasToken) {
      Formio.setToken(this.query['token']);
      localStorage.removeItem('formioAppUser');
      localStorage.removeItem('formioUser');
    }
  }
  onSubmit(submission) {
    const user = Formio.getUser();
    user.data.password = submission.data.password;
    const userFormio = new Formio(AppConfig.appUrl + '/user/submission/' + user._id);
    userFormio.saveSubmission(user).then((sub: any) => {
      this.router.navigateByUrl('/dashboard');
    });
  }

  ngOnInit() {
    if (!this.auth.authenticated) {
      window.location.reload(true);
    }
    const formio = new Formio(this.passwordEmbedURL);
    formio.loadForm().then((form) => {
      this.passwordForm = form;
    });
  }
}
