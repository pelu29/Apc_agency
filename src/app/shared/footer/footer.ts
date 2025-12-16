import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(private router:Router, private scroller: ViewportScroller){}

  irAPlanes() {
    this.router.navigate(['servicio'], { fragment: 'planes' }).then(() => {
      // un pequeño timeout asegura que el DOM ya se renderizó
      setTimeout(() => {
        this.scroller.scrollToAnchor('planes');
      }, 50);
    });
  }

  navegar(ruta:string):void{
    this.router.navigate([`/${ruta}`])
  }
}
