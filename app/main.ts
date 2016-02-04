import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {LoggerService} from './logger.service';
import {ConfigService} from './config.service';
import {JSONP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [JSONP_PROVIDERS, LoggerService, ConfigService]);
