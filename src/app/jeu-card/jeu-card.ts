import { Component, input, output } from '@angular/core';
import { StatutAffichagePipe } from '../statut-affichage-pipe';

@Component({
  selector: 'app-jeu-card',
  imports: [StatutAffichagePipe],
  templateUrl: './jeu-card.html',
  styleUrl: './jeu-card.css',
})
export class JeuCard {
  titre = input<string>('');

  statut = input<string>('termine');

  favori = input<boolean>(false);

  genres = input<string[]>([]);

  //méthode pour supprimer 
  supprimer = output<string>();

  supprimerJeu() {
    this.supprimer.emit(this.titre());
  }
}
