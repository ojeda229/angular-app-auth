import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  userEmail: string;
  constructor(public auth: FormioAuthService, public router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (auth.authenticated && auth.user.data) {
          this.userEmail = auth.user.data['email'];
        }
      }

      if (event instanceof NavigationEnd) {
        console.log(auth);
        if (auth.authenticated && auth.user.data) {
          console.log('Reveal');
          this.userEmail = auth.user.data['email'];
        }
        console.log('========================');
      }
    });
  }

  ngOnInit() {
  }
}
