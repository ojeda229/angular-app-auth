import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { FormioModule } from 'angular-formio';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetMailerComponent } from './reset-mailer/reset-mailer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authRoutes = FormioAuthRoutes({
    login: LoginComponent,
    register: RegisterComponent
  });

authRoutes[0].children.push({
  path: 'mailer',
  component: ResetMailerComponent
});

authRoutes[0].children.push({
  path: 'reset',
  component: ResetPasswordComponent
});

@NgModule({
  imports: [
    FormioAuth,
    CommonModule,
    FormioModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetMailerComponent,
    ResetPasswordComponent,
  ]
})
export class AuthModule { }
