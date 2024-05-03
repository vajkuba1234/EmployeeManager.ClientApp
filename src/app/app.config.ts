import { ApplicationConfig } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule, ReactiveFormsModule),
    provideRouter(routes)
  ]
};
