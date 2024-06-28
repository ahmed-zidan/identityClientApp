import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './services/error.interceptor';
import { httpInterceptor } from './services/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorInterceptor,httpInterceptor])) , provideToastr({closeButton:true})
  ]
};
