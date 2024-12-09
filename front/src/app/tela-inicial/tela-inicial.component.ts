import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

  constructor(private router:Router){}

  nomeCorrentista: string = '';
  saldoCorrentista: number = 0;

  ngOnInit() {
    this.nomeCorrentista = localStorage.getItem('nomeCorrentista') || '';
    this.saldoCorrentista = parseFloat(localStorage.getItem('saldoCorrentista') || '0'); // Recupera o saldo
  }

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
