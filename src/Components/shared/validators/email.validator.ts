import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function simpleEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

const value = control.value;
let isValid = false;

if (!value) {
  return { invalidEmail: true };
}

// Vérifie si ça ressemble à un email : quelque chose@quelquechose.quelquechose
const regex = /^[^@]+@[^@]+\.[^@]+$/;
if (regex.test(value)) {
  return null;
}

if(isValid){
    return null;
}
else{
    return { invalidEmail: true };
}

}
}
