import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { Router } from '@angular/router';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  query = {};
  resetForm = {};
  constructor( public auth: FormioAuthService, private router: Router ) {
    location.search.substr(1).split("&").forEach((item) => {
      this.query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
    });

    // const formio = new Formio('https://hzdutrqoproktql.form.io/resetpassword');


    // const hasToken = localStorage.getItem('formioToken');
    // if (this.query['token'] && !hasToken) {
    //   Formio.setToken(this.query['token']);
      // localStorage.removeItem('formioAppUser');
      // localStorage.removeItem('formioUser');
      // console.log('ping');
    // }
  }

  ngOnInit() {
    const formio = new Formio('https://hzdutrqoproktql.form.io/resetpassword');
    formio.loadForm().then((form) => {
      this.resetForm = form;
      // console.log(localStorage.getItem('formioUser'));
      // console.log("=========== 2");
      // Formio.setUser(localStorage.getItem('formioUser'));
    });
  }

  onSubmit(submission) {
    console.log(submission);
    Formio.currentUser().then((user: any) => {
      console.log(user);
      Formio.setUser(user);
      console.log(Formio);

      user.data.password = submission.data.password;
      const userFormio = new Formio('https://hzdutrqoproktql.form.io/user/submission/' + user._id);
      userFormio.saveSubmission(user).then((sub: any) => {
        this.router.navigateByUrl('/portal');
      });
    });
  }
}
