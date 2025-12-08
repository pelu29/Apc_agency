import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Nosotros } from './components/nosotros/nosotros';
import { Servicios } from './components/servicios/servicios';
import { Contacto } from './components/contacto/contacto';
import { Blog } from './components/blog/blog';

export const routes: Routes = [
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio',component:Inicio},
    {path: 'nosotros',component:Nosotros},
    {path: 'servicios',component:Servicios},
    {path: 'contacto', component:Contacto},
    {path: 'blog',component:Blog}
];
