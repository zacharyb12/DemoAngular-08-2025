import {  CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo-routing',
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule
  ],
  templateUrl: './demo-routing.html',
  styleUrl: './demo-routing.css'
})
export class DemoRouting {

}
