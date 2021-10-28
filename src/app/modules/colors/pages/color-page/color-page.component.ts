import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.css']
})
export class ColorPageComponent implements OnInit {
  backgroundColor: string = '#f7df1e';
  color: string = 'black';
  contain: string = 'Hi! this a text 😁';
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(event:any): void{
    this.backgroundColor = event.target.value;
    console.log(this.backgroundColor);
  }

}
