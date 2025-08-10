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

  // FormGroup avec des contrôles
  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du FormGroup avec des contrôles
    // Chaque contrôle a des validations associées
    this.formulaire = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Vérification de la validité du formulaire avant de soumettre
    if (this.formulaire.valid) {

      console.log(this.formulaire.value);
      alert('Formulaire envoyé !');

    } else {

      alert('Veuillez remplir tous les champs correctement.');
      
    }
  }
}
