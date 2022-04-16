import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TopBarComponent} from './top-bar.component'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {reducers} from '../../../auth/store/reducers'

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
