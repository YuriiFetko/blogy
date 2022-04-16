import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {AppStateInterface} from './shared/types/appState.interface'
import {getCurrentUserAction} from './auth/store/actions/getCurrentUser.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'blogy'

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.store.dispatch(getCurrentUserAction())
  }
}
