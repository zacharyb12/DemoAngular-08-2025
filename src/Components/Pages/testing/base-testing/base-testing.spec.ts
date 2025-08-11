import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTesting } from './base-testing';

describe('BaseTesting', () => {
  let component: BaseTesting; // Instance du composant
  let fixture: ComponentFixture<BaseTesting>; // Enveloppe de test qui contient le composant

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTesting);// Création de l'instance du composant
    component = fixture.componentInstance;                 // Récupération de l’instance testable
    fixture.detectChanges();                               // Déclenche la détection des changements (liens, ngOnInit, etc.)
  });

// Test de base : vérifie que le composant est bien créé
  it('should create', () => {
    expect(component).toBeTruthy(); // Le composant devrait exister (≠ null/undefined)
  });

  // Test unitaire de la méthode addition
  it('should return number when calling addition', () => {
    const fixture = TestBed.createComponent(BaseTesting); // Création du composant de test
    const app = fixture.componentInstance; // Accès à l'instance du composant

    // Appel de la méthode addition avec 2 et 3
    let valueObtenu = app.addition(2, 3);
    expect(valueObtenu).toEqual(5); // 2 + 3 = 5

    // Test avec des nombres négatifs
    valueObtenu = app.addition(-5, 5);
    expect(valueObtenu).toEqual(0); // -5 + 5 = 0
  });

  // Test unitaire de la méthode soustraction
  it('should return number when calling soustraction', () => {
    const fixture = TestBed.createComponent(BaseTesting);
    const app = fixture.componentInstance;

    let valueObtenu = app.soustraction(5, 3);
    expect(valueObtenu).toEqual(2); // 5 - 3 = 2
  });

  // Test unitaire de la méthode division
  it('should return number when calling division', () => {
    const fixture = TestBed.createComponent(BaseTesting);
    const app = fixture.componentInstance;

    let valueObtenu = app.division(10, 2);
    expect(valueObtenu).toEqual(5); // 10 / 2 = 5

    // Vérifie que diviser par zéro déclenche une erreur (bonne pratique)
    // On passe une fonction à `expect` pour qu'elle soit "surveillée" sans s'exécuter immédiatement
    expect(() => app.division(9, 0)).toThrowError('Division by zero is not allowed');
  });
});
