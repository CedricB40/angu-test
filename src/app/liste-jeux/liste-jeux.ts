import { Component } from '@angular/core';
import { JeuCard } from '../jeu-card/jeu-card';

@Component({
  selector: 'app-liste-jeux',
  imports: [ JeuCard ],
  templateUrl: './liste-jeux.html',
  styleUrl: './liste-jeux.css',
})
export class ListeJeux {}
