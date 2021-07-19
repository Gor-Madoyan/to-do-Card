import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() id:any = ''
  @Input() name:string = ''
  @Input() lastName:string = ''

  constructor() { }

  ngOnInit(): void {
  };

}












