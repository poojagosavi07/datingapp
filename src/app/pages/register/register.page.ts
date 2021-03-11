import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  ngOnInit() {
  }

 public gender: string;
  constructor() {}

  genderHandler(event) {
    // get data throught event emitter
    this.gender = event.target.value;
  }

  leaveGender(event) {
    console.log('bye bye ', event.target.value);
  }

  goGender(event) {
    console.log('hello ', event.target.value);
  }
}
