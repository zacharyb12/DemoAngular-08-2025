import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tofahrenheit'
})
export class TofahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    
    if (typeof value !== 'number') {
      return value;
    }

    return (value * 9 / 5) + 32;
    
  }

}
