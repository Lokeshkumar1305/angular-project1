import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() img:any
  // constructor(){
  //   this.img="../../../assets/2.jpg"
  // }
}
