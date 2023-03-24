import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogin : boolean =false;

  constructor(private route : Router){

  }

  navToCounter(){
    this.route.navigate(['/counter']);
    this.isLogin =true;
  }
}
