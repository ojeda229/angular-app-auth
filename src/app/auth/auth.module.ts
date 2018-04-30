import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { FormioModule } from 'angular-formio';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';

const authRoutes = FormioAuthRoutes({
  login: LoginComponent,
  register: RegisterComponent
});

authRoutes[0].children.push({
  path: 'reset',
  component: ResetComponent
});

authRoutes[0].children.push({
  path: 'resetpass',
  component: ResetPasswordComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioAuth,
    FormioModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetComponent,
  ]
})
export class AuthModule { }
