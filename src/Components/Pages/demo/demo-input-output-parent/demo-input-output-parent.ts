import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoInputOutputEnfant } from "../demo-input-output-enfant/demo-input-output-enfant";

@Component({
  selector: 'app-demo-input-output-parent',
  imports: [
    FormsModule,
    DemoInputOutputEnfant
],
  templateUrl: './demo-input-output-parent.html',
  styleUrl: './demo-input-output-parent.css'
})
export class DemoInputOutputParent {
  valueFromParent = 0;
  valueFromChild = 0;

  handleValueFromChild(value: number) {
    this.valueFromChild = value;
  }
 
}
