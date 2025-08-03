import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-group',
  imports: [
    FormsModule,
        ReactiveFormsModule
  ],
  templateUrl: './demo-form-group.html',
  styleUrl: './demo-form-group.css'
})
export class DemoFormGroup {
  // exemple avec le form group
  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
      alert('Formulaire envoyé !');
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
