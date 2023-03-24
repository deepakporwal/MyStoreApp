import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path : 'counter', component : CounterComponent
  },
  {
    path : 'card', component : CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
