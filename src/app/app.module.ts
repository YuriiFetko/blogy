import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment.prod'
import {EffectsModule} from '@ngrx/effects'
import {TopBarModule} from './shared/modules/top-bar/top-bar.module'
import {PersistenceService} from './shared/services/persistence.service'
import {AuthInterceptor} from './shared/services/auth.interceptor';
import {GlobalFeedModule} from './global-feed/global-feed.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    TopBarModule,
    GlobalFeedModule
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
