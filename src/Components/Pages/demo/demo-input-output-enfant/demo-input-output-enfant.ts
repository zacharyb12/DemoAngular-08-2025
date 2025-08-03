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
  @Input() valueFromParent: number = 0;

  valueFromChild: number = 0;
  @Output() emitValue = new EventEmitter<number>();

  sendValue() {

    this.emitValue.emit(this.valueFromChild);
  }
}
