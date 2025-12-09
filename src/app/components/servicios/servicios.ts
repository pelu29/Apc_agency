import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  abrirWhatsApp(): void {
    const numero = '51910897162';
    const mensaje = 'Hola, quiero información';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Abrir en una nueva pestaña
    window.open(url, '_blank');
  }

}
