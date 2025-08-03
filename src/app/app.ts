import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from "../Components/shared/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ShopManager';
}
