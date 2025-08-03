import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tocelcius'
})
export class TocelciusPipe implements PipeTransform {

transform(value: number): number {
  
  if (typeof value !== 'number') {
    return value;
  }

  return (value - 32) * 5 / 9;
}

}
