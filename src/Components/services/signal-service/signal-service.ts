import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  /**
   * Les signaux sont des objets réactifs introduits dans Angular
   * pour gérer l'état sans RxJS (ni abonnements/désabonnements).
   * 
   * 3 usages principaux :
   * - Réactivité : les composants utilisant le signal sont MAJ automatiquement
   * - Gestion d’état : simplifie la gestion de l’état global ou local
   * - Code plus simple : plus besoin de Subject/BehaviorSubject
   */

  // ------------------------------------------------------------------
  // 1. WritableSignal (modifiable directement)
  // ------------------------------------------------------------------
  counter = signal(0); // WritableSignal<number>

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.update(v => v - 1);
  }


  // ------------------------------------------------------------------
  // 2. ComputedSignal (valeur dérivée, lecture seule)
  // ------------------------------------------------------------------
  // le computed se met à jour automatiquement
  // dès que l'une des valeurs qu'il utilise change
  
  price = signal(100);
  quantity = signal(2);

  total = computed(() => this.price() * this.quantity());

  // ------------------------------------------------------------------
  // 3. Effect (réagit automatiquement aux changements)
  // ------------------------------------------------------------------
  counter2 = signal(0);

  constructor() {
    effect(() => {
      console.log('Counter2 a changé, nouvelle valeur :', this.counter2());
    });
  }

  increment2() {
    this.counter2.update(v => v + 1);
  }

  // ------------------------------------------------------------------
  // 4. Signal de collection (tableaux ou objets)
  // ------------------------------------------------------------------
  items = signal<string[]>([]);

  addItem() {
    const value = "hello"
    // update permet de muter facilement une collection
    this.items.update(list => [...list, value]);
  }

  clearItems() {
    this.items.set([]);
  }

  // ------------------------------------------------------------------
  // 5. Exemple de signal privé exposé par un getter
  // ------------------------------------------------------------------
  private messageSignal = signal<string>('Message initial');
  messageSignalBoolean = signal(false);

  updateMessage(newMessage: string) {
    this.messageSignal.set(newMessage);
  }

  getMessage(): string {
    return this.messageSignal();
  }

  getMessageSignal() {
    // On expose le signal "tel quel" (lecture seule côté composant)
    return this.messageSignal;
  }

  getMessageSignal2() {
    // Même chose, mais signal modifiable
    return this.messageSignalBoolean;
  }
}
