import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloworld.component';
import { MinhaPagina } from './minha-pagina/minha-pagina';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhaPagina],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos-basicos-angular');
}
