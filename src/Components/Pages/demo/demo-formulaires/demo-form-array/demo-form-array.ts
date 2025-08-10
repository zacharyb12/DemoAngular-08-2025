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
  // FormArray pour gérer un tableau de champs
  // Chaque champ est un FormControl


  form: FormGroup;

  constructor(private fb: FormBuilder) {
  // Initialisation du FormGroup avec un FormArray
    this.form = this.fb.group({
      // FormArray avec un contrôle initial
      // Ici, on initialise avec un tableau contenant un seul champ vide
      firstNames: this.fb.array([this.fb.control('')]) // Un champ au départ
    });
  }

  // Getter pour faciliter l'accès au FormArray
  // Permet d'accéder à firstNames comme une propriété
  get firstNames() {
    return this.form.get('firstNames') as FormArray;
  }

  // Méthodes pour ajouter et supprimer des champs dans le FormArray
  // Ces méthodes permettent de manipuler dynamiquement le FormArray
  addFirstName() {
    this.firstNames.push(this.fb.control(''));
  }

  // Supprimer le dernier champ du FormArray
  removeFirstName() {
    this.firstNames.removeAt(this.firstNames.length - 1);
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    console.log('Valeurs :', this.form.value);
  }
}
