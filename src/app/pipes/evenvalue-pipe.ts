import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvalue',
})
export class EvenValuePipe implements PipeTransform {

  transform(values: number[]): number[] {
    return values.filter(v => v % 2 == 0);
  }

}
