import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-form-control',
  imports: [
        FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './demo-form-control.html',
  styleUrl: './demo-form-control.css'
})
export class DemoFormControl {

  // FormControl avec valeur par défaut vide
  nameControl = new FormControl(''); 

  
  onSubmit() {
    console.log('Valeur du champ:', this.nameControl.value);
  }

}
