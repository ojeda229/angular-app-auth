import { Component, OnInit } from '@angular/core';
import { AuthConfig, AppConfig } from '../../../config';

@Component({
  selector: 'app-reset-mailer',
  templateUrl: './reset-mailer.component.html',
  styleUrls: ['./reset-mailer.component.scss']
})
export class ResetMailerComponent implements OnInit {
  reset = false;
  localEmail: string;
  mailerEmbedURL =  AppConfig.appUrl + '/resetmailer';
  constructor() {}

  onSubmit(submission) {
    this.reset = true;
    this.localEmail = submission.data['email'];
  }

  ngOnInit() {
  }
}
