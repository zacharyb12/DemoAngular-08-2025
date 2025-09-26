import { NgIf, NgFor, NgClass, NgStyle, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Changecolor } from '../../../shared/directives/changeColor/changecolor';

@Component({
  selector: 'app-demo-directives',
  imports: [
        NgIf,
    NgFor,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    Changecolor,
    CommonModule
  ],
  templateUrl: './demo-directives.html',
  styleUrl: './demo-directives.css'
})
export class DemoDirectives {
// variable ngIf
  value = 5;
  
  username :  string | null  = null
  userage :  number | null  = null
  useremail :  string | null  = null
  
  ngOnInit(): void {
    setTimeout( ()=> {
      this.username = "John Doe"
      this.userage = 30
      this.useremail = "mail@mail.com"
      
    },2000)
  }

  // ng Switch

valeur = 5;

  // variable ngFor

  maList = [
    "john1",
    "john2",
    "john3",
    "john4",
    "john5"
  ]

  productList : Product[] = [
    {
      id : 1,
      name : "Iphone",
      price : 1000,
      img : "https://cdn.pixabay.com/photo/2025/05/07/18/46/lake-9585821_1280.jpg"
    },
    {
      id : 2,
      name : "Nokia",
      price : 800,
      img : "https://cdn.pixabay.com/photo/2025/05/07/18/46/lake-9585821_1280.jpg"
    },
    {
      id : 3,
      name : "Xiaomi",
      price : 600,
      img : "https://cdn.pixabay.com/photo/2025/05/07/18/46/lake-9585821_1280.jpg"
    }
  ]

// NgClass
isVisible = false

toggleValue(){
  this.isVisible = !this.isVisible
}

// NgStyle

getStyles(){
  return {
    'background-color' : this.isVisible ? 'blue'  : 'red'  ,
    'color'            : this.isVisible ? 'white' : 'yellow',
    'font-size'        : this.isVisible ? '50px'  : '15px'
  }
}

}

// interface demo ngFor
export interface Product{
  id : number,
  name : string,
  price : number,
  img : string,
}

