import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Jeux { 

  catalogue = 
  [

  { titre: 'Zelda', statut: 'termine', favori: false, genres: ['Action', 'RPG'] },
  { titre: 'Mario', statut: 'en cours', favori: true, genres: ['Aventure'] },
  { titre: 'Pac-Man', statut: 'a faire', favori: false, genres: ['Arcade'] },
  { titre: 'Tetris', statut: 'en cours', favori: true, genres: ['Puzzle'] },

  ];

}
