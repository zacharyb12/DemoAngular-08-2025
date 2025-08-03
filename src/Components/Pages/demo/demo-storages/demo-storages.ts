import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-storages',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './demo-storages.html',
  styleUrl: './demo-storages.css'
})
export class DemoStorages {

data : string = '';

GetInfoLocalStorage() {
    const result : string | null = localStorage.getItem("monInfo");
      console.log(result);
  }

  SetLocalStorage() {
localStorage.setItem("monInfo", this.data);
  }

  RemoveLocalStorage() {
    localStorage.removeItem("monInfo");
  }

  ClearLocalStorage() {
    localStorage.clear();
  }

}
