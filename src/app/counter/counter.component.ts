import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/actions/counter.actions';
import { AppState } from '../store/state/AppState';
import { selectCount } from '../store/selector/counter.selector';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>
  

  constructor(private store: Store<{ count: AppState }>) {
    debugger
    //this.count$ = store.select('count');
    this.count$ = store.pipe(select(selectCount)) 
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
