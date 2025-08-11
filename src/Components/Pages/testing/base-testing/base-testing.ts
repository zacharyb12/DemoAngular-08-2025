import { Component } from '@angular/core';

@Component({
  selector: 'app-base-testing',
  imports: [],
  templateUrl: './base-testing.html',
  styleUrl: './base-testing.css'
})
export class BaseTesting {
    addition(nb1: number, nb2: number): number {
    return nb1 + nb2;
  }
  
  soustraction(nb1: number, nb2: number): number {
    return nb1 - nb2;
  }

  division(nb1: number, nb2: number): number {
    if (nb2 === 0 ) {
      throw new Error('Division by zero is not allowed');
    }
    return nb1 / nb2;
  }
}
