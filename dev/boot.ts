///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocalStorageService, LocalStorageSubscriber} from './LocalStorageEmitter';
import {AppComponent} from "./app.component";
import {ListingsService} from "./listings.service";
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

var appPromise = bootstrap(AppComponent, [LocalStorageService, ListingsService, GOOGLE_MAPS_PROVIDERS]);

// register LocalStorage, this registers our change-detection.
LocalStorageSubscriber(appPromise);
