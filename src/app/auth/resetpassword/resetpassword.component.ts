import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  localEmail;
  public reset = false;

  constructor() {}

  onSubmit(submission) {
    this.reset = true;
    console.log(submission);
    this.localEmail = submission.data['email'];
  }

  ngOnInit() {
  }
}
