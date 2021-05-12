import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textconverter'
})
export class TextconverterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
   if(args[0] === 'upper') {
     return value.toUpperCase();
   } else if (args[0] === 'lower') {
     return value.toLowerCase();
   }
   return value;
  }

}
