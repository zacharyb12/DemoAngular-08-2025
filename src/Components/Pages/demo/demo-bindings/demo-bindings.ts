import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-bindings',
  imports: [FormsModule],
  templateUrl: './demo-bindings.html',
  styleUrl: './demo-bindings.css'
})
export class DemoBindings {

// Le bindings lié une donnée à un élément du template.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Types de données en TypeScript
// declaration d'une variable ( pour la liaison de données ou pas )



// booléen 
isCorrect: boolean = false;

// chaîne de caractères
message: string = 'Hello, Angular!';

// nombre
count: number = 0;

// valeur nulle
nullableValue: string | null = null;

// valeur indéfinie
undefinedValue: string | undefined = undefined;

// n'importe quel type ( à utiliser avec parcimonie )
anyValue1: any = 'n\'importe quelle valeur';
anyValue2: any = 42;
anyValue3: any = true;


// tableau d'objets permettant de stocker des éléments d'un type spécifique

// Exemple de tableau de chaînes de caractères
elements: string[] = ['Item 1', 'Item 2', 'Item 3'];

notes: number[] = [10, 15, 20, 25];

capteurs: boolean[] = [true, false, true, false];

// Exemple de tableau d'objets
listeReservations: any[] = [
  { name: 'Alice', age: 30 , destination: 'Paris' },
  { name: 'Bob', age: 25 , destination: 'Londres' },
  { name: 'Charlie', age: 35 , destination: 'New York' }
]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// les fonctions qui permettent d'effectuer une action lorsque l'utilisateur declenche un événement ( click , survole , etc...)
maValue : number = 0;
updateMessage(): void {
  this.maValue += 1;
}

// Exemple de fonction pour afficher un message
showMessage(message : string): void {
  alert(message);
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Exemple de liaison de données avec un modèle de données
// un voyage

// Modèle de données pour la liaison
voyage = {
  Image : "images/beach.png",
  destination: 'la playa',
  dateDepart: new Date('2026-01-01'),
  dateRetour: new Date('2026-12-01'),
  prix: 1200
}

reservation(){
  alert(`Réservation confirmée pour 
    ${this.voyage.destination} 
    du ${this.voyage.dateDepart.toLocaleDateString()} 
    au ${this.voyage.dateRetour.toLocaleDateString()}. 
    Prix: ${this.voyage.prix}€`
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bindings one-way consiste a afficher une propriété d'un modèle dans le template

maValeurString : string = 'Ceci est une valeur à afficher';

maValeurNumber : number = 42;

maValeurBoolean : boolean = true;

toggleValue(value : boolean) : void {
  value = !value;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bindings two-way permet de lier une propriété d'un modèle à un élément du template
// la déclaration des variables est identique à celle du one-way
// mais on utilise le décorateur ngModel pour la liaison bidirectionnelle
// il faut importer *** FormsModule *** dans le composant qui utilise le two-way binding



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event-Bindings

numberEventBinding: number = 0;

increment(): void {
  this.numberEventBinding += 1;
}

decrement(): void {
  this.numberEventBinding -= 1;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Attribute-Bindings


valeurAttributeBindings: string = 'Ceci est ...';
booleenAttributeBindings: boolean = true;

modifier(): void {
  this.booleenAttributeBindings = !this.booleenAttributeBindings;
}



}  