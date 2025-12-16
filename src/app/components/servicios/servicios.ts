import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  abrirWhatsAppPaginaWeb(): void {
    const numero = '51910897162';
    const mensaje = `Hola!, estoy interesado(a) en el servicio Página Web a Medida para emprendedores.
                    Me gustaría recibir más información sobre las secciones, el diseño personalizado y el proceso de desarrollo.
                    ¡Gracias!`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Abrir en una nueva pestaña
    window.open(url, '_blank');
  }

  abrirWhatsAppSisGest(): void {
    const numero = '51910897162';
    const mensaje = `Hola!, estoy interesado(a) en el Sistema de Gestión para negocios.
                    Quisiera conocer cómo funciona el panel administrable, los reportes y la gestión de productos y clientes.
                    Quedo atento(a), gracias.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Abrir en una nueva pestaña
    window.open(url, '_blank');
  }

  abrirWhatsAppTiendaVirtual(): void {
    const numero = '51910897162';
    const mensaje = `Hola!, estoy interesado(a) en el servicio de Tienda Virtual.
                    Me gustaría saber más sobre los métodos de pago, el carrito de compras y la administración de productos.
                    ¡Gracias por la información!`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Abrir en una nueva pestaña
    window.open(url, '_blank');
  }


  navegarSitioWeb(link: string): void {
    window.open(link, '_blank');
  }

}
