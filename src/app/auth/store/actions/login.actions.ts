import {createAction, props} from '@ngrx/store'
import {ActionsType} from '../actionsType'

import {LoginRequestInterface} from '../../types/loginRequest.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'

export const loginAction = createAction(
  ActionsType.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionsType.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const loginFailureAction = createAction(
  ActionsType.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
