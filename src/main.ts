/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { TokenInterceptor } from './app/auth/token-interceptor.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient( withInterceptors([TokenInterceptor])),
    provideRouter(routes),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
