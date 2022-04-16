import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'

import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from './store/reducers'
import {RegisterEffect} from './store/effects/register.effect'

import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-messages.module'

import {AuthService} from './services/auth.service'
import {PersistenceService} from '../shared/services/persistence.service'

import {RegisterComponent} from './components/register/register.component'
import {LoginComponent} from './components/login/login.component'
import {LoginEffect} from './store/effects/login.effect'
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
