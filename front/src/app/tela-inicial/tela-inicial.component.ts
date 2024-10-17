import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {
  
  constructor(private router:Router){}

  extrato() {
    this.router.navigate(['/tela-extrato'])
  }

  pix() {
    this.router.navigate(['/tela-pix'])
  }

  sair() {
    this.router.navigate(['/tela-login'])
  }

  investir() {
    this.router.navigate(['/tela-investimento'])
  }
}
