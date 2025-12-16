import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  navegarSitioWeb(link: string): void {
    window.open(link, '_blank');
  }
}
