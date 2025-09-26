import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  // Les sujets (Subjects) sont des objets réactifs qui permettent de gérer et de suivre les changements d'état dans une application Angular. 
  // Ils sont utilisés pour créer des interactions dynamiques et réactives entre les composants et les services.
  // Les sujets permettent de faire plusieurs choses :
  // 1. Réactivité : Lorsqu'un sujet émet une nouvelle valeur, tous les composants ou services qui l'utilisent sont automatiquement mis à jour.
  // 2. Gestion de l'état : Ils facilitent la gestion de l'état global de l'application.
  // 3. Simplification du code : Ils réduisent la complexité du code en éliminant le besoin de gestion manuelle des abonnements et des observables.

  // differents types de sujets :
  // 1. Subject : Un sujet de base qui peut émettre des valeurs et être observé.
  // 2. BehaviorSubject : Un sujet qui stocke la dernière valeur émise et la renvoie aux nouveaux abonnés.
  // 3. ReplaySubject : Un sujet qui stocke un nombre spécifié de valeurs émises et les renvoie aux nouveaux abonnés.
  // 4. AsyncSubject : Un sujet qui n'émet qu'une seule valeur, la dernière valeur émise, lorsqu'il est complété.

  // declaration d'un sujet
  private messageSubject = new Subject<string>();
  private messageBehaviorSubject = new BehaviorSubject<string>('Message initial');
  private messageReplaySubject = new ReplaySubject<string>(3)
  private messageAsyncSubject = new AsyncSubject<string>();

  // Méthode pour mettre à jour le message
  updateMessage(newMessage: string) {
    // next pour émettre une nouvelle valeur aux abonnés
    this.messageSubject.next(newMessage);
    this.messageBehaviorSubject.next(newMessage);
    this.messageReplaySubject.next(newMessage);
    this.messageAsyncSubject.next(newMessage);

    // complete pour terminer l'AsyncSubject
    // this.messageAsyncSubject.complete();

    // Remarque : L'AsyncSubject n'émettra la dernière valeur qu'il a reçue que lorsqu'il sera complété.
    // this.messageAsyncSubject.complete();

    
  }

  // Méthode pour obtenir le sujet lui-même
  getMessageSubject() {
    return this.messageSubject.next("Bonjour le monde !");
  }

  getMessageBehaviorSubject() {
    return this.messageBehaviorSubject;
  }

  getMessageReplaySubject() {
    return this.messageReplaySubject;
  }

  getMessageAsyncSubject() {
    return this.messageAsyncSubject;
  }


  // les actions à faire sur les sujets
  // 1. next(value) : Émet une nouvelle valeur aux abonnés.
  // 2. error(err) : Notifie les abonnés d'une erreur.
  // 3. complete() : Notifie les abonnés que le sujet est terminé et qu'aucune nouvelle valeur ne sera émise.

  // les subjects sont liés aux observables
  // Un sujet est à la fois un observable et un observateur. 
  // Cela signifie qu'il peut émettre des valeurs (comme un observable) et recevoir des valeurs (comme un observateur).
  // Les sujets sont souvent utilisés pour partager des données entre différents composants ou services dans une application Angular.
}
