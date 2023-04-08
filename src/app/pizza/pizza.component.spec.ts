import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PizzaComponent } from './pizza.component';
import { DatePipe } from '@angular/common';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaComponent ],
      providers :[
        DatePipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('page title should be Pizza world',()=>{
    expect(component.title).toBe('Pizza world');
  })

  it('should print log', ()=>{
    spyOn(console, 'log');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(console.log).toHaveBeenCalledWith('button clicked');
  })

  it('should use datepipe',()=>{
    expect(component.today).toBeTruthy();
  })
});
