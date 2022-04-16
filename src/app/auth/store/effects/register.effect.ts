import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  registerAction,
  registerFailureAction,
  registerSuccesAction,
} from '../actions/register.actions'
import {AuthService} from '../../services/auth.service'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {HttpErrorResponse} from '@angular/common/http'
import {PersistenceService} from '../../../shared/services/persistence.service'
import {Router} from '@angular/router'

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // window.localStorage.setItem('accessToken', currentUser.token)
            this.persistenceService.set('accessToken', currentUser.token)
            return registerSuccesAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccesAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}
