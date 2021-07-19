import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() clickButton = new EventEmitter()
  @Input() disable:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickButton.emit() 
  }

}
