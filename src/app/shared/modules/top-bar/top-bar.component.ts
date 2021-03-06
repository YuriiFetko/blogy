import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {CurrentUserInterface} from '../../types/currentUser.interface'
import {select, Store} from '@ngrx/store'
import {AuthStateInterface} from '../../../auth/types/authState.interface'
import {
  isAnonymousSelector,
  isCurrentUserSelector,
  isLoggedInSelector,
} from '../../../auth/store/selectors'
import {AppStateInterface} from '../../types/appState.interface'

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(isCurrentUserSelector))
  }
}
