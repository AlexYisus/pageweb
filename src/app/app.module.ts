import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { E404Component } from './component/e404/e404.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactoComponent } from './component/contacto/contacto.component';

import { FooterComponent } from './component/footer/footer.component';
import { ProductosComponent } from './component/productos/productos.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    E404Component,
    NavbarComponent,
    ContactoComponent,

    FooterComponent,
    ProductosComponent,
    NosotrosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
