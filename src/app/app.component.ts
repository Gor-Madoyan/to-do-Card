import { Component } from '@angular/core';
import { cards } from './models/Todo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todoCard';

  Cards = cards

  addDisable = false
  deletDisable = true;
  resetDisable = true
  count = 0;

  add() {
    this.count++;
    this.deletDisable = false;
    this.resetDisable = false
    if(this.count === 10) {
      console.log('you cant add any card ');
      this.addDisable = true
      this.resetDisable = true
      this.deletDisable = true
    }
  };

  remove() {
  this.count--
  if(this.count <= 0) {
    this.deletDisable = true
    this.resetDisable = true  
  }
  this.addDisable = false
  };

  reset() {
    this.count = 0
    if(this.count <= 0) {
      this.resetDisable = true
    }
    this.deletDisable = true
    this.resetDisable = true
  }
}




