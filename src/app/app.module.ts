import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { RouterModule, Routes } from '@angular/router';
import { AuthConfig, AppConfig } from '../config';
import { FormioAppConfig } from 'angular-formio';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlatformModule } from './platform/platform.module';
import { AuthModule } from './auth/auth.module';

const navStack: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'dashboard', loadChildren: () => PlatformModule },
  { path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(navStack)
  ],
  providers: [
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
