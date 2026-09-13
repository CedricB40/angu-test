import { Component, inject } from '@angular/core';
import { JeuCard } from '../jeu-card/jeu-card';
import { Jeux } from '../jeux';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-jeux',
  imports: [JeuCard, FormsModule],
  templateUrl: './liste-jeux.html',
  styleUrl: './liste-jeux.css',
})
export class ListeJeux {
  jeuxService = inject(Jeux);

  nouveauTitre = '';

  ajouterJeu() {
    this.jeuxService.catalogue.push({
      titre: this.nouveauTitre,
      statut: 'a faire',
      favori: false,
      genres: [],
    });
    this.nouveauTitre = '';
  }
}
