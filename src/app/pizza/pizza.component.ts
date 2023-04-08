import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  
  title = "Pizza world";
  today: number = Date.now();
  constructor(private datePipe : DatePipe){

  }

  ngOnInit(): void {

  }

  printlog(){
    console.log('button clicked');
    console.log(this.today);
  }
}
