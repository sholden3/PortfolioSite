import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import posthog from 'posthog-js'

if (environment.production) {
  enableProdMode();
}

posthog.init(
  'phc_Yv2l8W8bYdHXzM6SToxoQ7MQsVP1z5vhyyR6YZF0KLo',
  {
    api_host:"https://us.posthog.com"
  }
)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
