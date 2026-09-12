import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ListeJeux } from './liste-jeux/liste-jeux';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ListeJeux , Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('biblio-jeux');
}