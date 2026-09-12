import { Component, inject } from '@angular/core';
import { JeuCard } from '../jeu-card/jeu-card';
import { Jeux } from '../jeux';

@Component({
  selector: 'app-liste-jeux',
  imports: [ JeuCard ],
  templateUrl: './liste-jeux.html',
  styleUrl: './liste-jeux.css',
})
export class ListeJeux {
  jeuxService = inject(Jeux);
}