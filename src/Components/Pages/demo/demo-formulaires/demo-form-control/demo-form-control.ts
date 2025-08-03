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
  nameControl = new FormControl(''); // FormControl avec valeur par défaut vide

  onSubmit() {
    console.log('Valeur du champ:', this.nameControl.value);
  }
}
