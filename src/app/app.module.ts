import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlatformModule } from './platform/platform.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'auth', loadChildren: () => AuthModule },
      { path: 'dashboard', loadChildren: () => PlatformModule },
      { path: '**', pathMatch: 'full', redirectTo: '/' }
    ])
  ],
  providers: [
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
