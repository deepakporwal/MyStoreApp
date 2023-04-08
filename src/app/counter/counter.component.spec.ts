import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports :[StoreModule.forRoot({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
