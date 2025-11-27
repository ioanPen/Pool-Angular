import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { JwtInterceptor } from './app/jwt.interceptor';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideRouter(routes) // <-- this is required for ActivatedRoute / routerLink / router-outlet
  ]
});
