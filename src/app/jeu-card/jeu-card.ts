import { Component, signal, input } from '@angular/core';

@Component({
  selector: 'app-jeu-card',
  imports: [],
  templateUrl: './jeu-card.html',
  styleUrl: './jeu-card.css',
})

export class JeuCard {
  titre = input<string>('');

  statut = input<string>('termine');
  
  favori = input<boolean>(false);

  genres = input<string[]>([]);

}
