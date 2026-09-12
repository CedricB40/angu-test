import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statutAffichage',
})
export class StatutAffichagePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'termine':
        return 'Terminé';
      case 'en cours':
        return 'En cours';
      case 'a faire':
        return 'A faire';
      default:
        return '';
    }
  }
}
