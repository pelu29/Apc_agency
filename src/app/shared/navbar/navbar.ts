import { Component,HostListener } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private router:Router){}

  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  navegar2(seccion: string) {
    this.router.navigate([`/${seccion}`])
  }

  navegar(seccion: string) {
    const elemento = document.getElementById(seccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.menuAbierto = false;
  }

  @HostListener('document:click', ['$event'])
  cerrarMenuSiClickAfuera(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.menuAbierto = false;
    }
  }

}
