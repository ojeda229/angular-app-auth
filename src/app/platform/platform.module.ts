import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';

const platformRoutes = FormioResourceRoutes({
  path: 'dashboard',
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(platformRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
        name: 'dashboard',
        form: 'dashboard'
      }}
  ],
  declarations: []
})
export class PlatformModule { }
