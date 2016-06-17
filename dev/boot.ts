///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocalStorageService, LocalStorageSubscriber} from './LocalStorageEmitter';
import {AppComponent} from "./app.component";

var appPromise = bootstrap(AppComponent, [LocalStorageService]);

// register LocalStorage, this registers our change-detection.
LocalStorageSubscriber(appPromise);
