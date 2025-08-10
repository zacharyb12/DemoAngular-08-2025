import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-input-output-enfant',
  imports: [
    FormsModule
  ],
  templateUrl: './demo-input-output-enfant.html',
  styleUrl: './demo-input-output-enfant.css'
})
export class DemoInputOutputEnfant {
  // valeur transmise par le parent
  @Input() valueFromParent: number = 0;



  // valeur saisie par l'enfant
  // cette valeur sera remontée au parent
  valueFromChild: number = 0;

  // declencheur d'evenement
  // permet de remonter l'info vers le parent
  @Output() emitValue = new EventEmitter<number>();

  sendValue() {
    this.emitValue.emit(this.valueFromChild);
  }
  
}
