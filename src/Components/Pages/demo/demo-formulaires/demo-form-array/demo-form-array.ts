import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-form-array',
  imports: [
        ReactiveFormsModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './demo-form-array.html',
  styleUrl: './demo-form-array.css'
})
export class DemoFormArray {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstNames: this.fb.array([this.fb.control('')]) // Un champ au départ
    });
  }

  get firstNames() {
    return this.form.get('firstNames') as FormArray;
  }

  addFirstName() {
    this.firstNames.push(this.fb.control(''));
  }

  removeFirstName() {
    this.firstNames.removeAt(this.firstNames.length - 1);
  }

  onSubmit() {
    console.log('Valeurs :', this.form.value);
  }
}
