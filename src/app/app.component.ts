import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';

import { CountState } from './reducers/count/count.reducer';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  constructor(private store$: Store<CountState>) {
    // this.counter = 0;
  }


  //  clear counter
  clear() {
    // this.counter = 0;
  }

  //  decrease counter
  decrease() {
    // this.counter = this.counter ? --this.counter : 0;
  }

  //  increase counter
  increase() {
    // this.counter++;
  }

}
