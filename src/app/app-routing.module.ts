import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { E404Component } from './component/e404/e404.component';
import { ContactoComponent } from './component/contacto/contacto.component';

import { ProductosComponent } from './component/productos/productos.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path: 'contacto',component: ContactoComponent},
{path: 'productos', component: ProductosComponent},
{path: 'nosotros', component: NosotrosComponent},
{path: '**', component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
