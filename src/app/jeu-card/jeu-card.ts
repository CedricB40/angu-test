import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-jeu-card',
  imports: [],
  templateUrl: './jeu-card.html',
  styleUrl: './jeu-card.css',
})

export class JeuCard {
  titre = signal('Mon 1er jeu');

  statut = signal('en cours');
  
  favori = signal(false);

  genres = ['Action', 'Aventure', 'RPG'];
}
