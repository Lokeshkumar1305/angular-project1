import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:any
img2:any
img3:any
img4:any
constructor(){
  this.img1="../../../assets/1.jpg"
  this.img2="../../../assets/2.jpg"
  this.img3="../../../assets/3.jpg"
  this.img4="../../../assets/4.jpg"
}
}
