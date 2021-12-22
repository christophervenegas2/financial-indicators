import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'christopher-venegas-miningtag';
  graphNames = ['uf', 'bitcoin', 'dolar', 'dolar_intercambio', 'euro', 'imacec', 'ipc', 'ivp', 'libra_cobre', 'tasa_desempleo', 'tpm', 'utm']
}
