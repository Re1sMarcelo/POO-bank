import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from './../correntista.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  nomeCorrentista: string = '';
  saldoCorrentista: number = 0;

  constructor(private router: Router, private correntistaService: CorrentistaService) {}

  ngOnInit() {
    // Recuperando o nome e saldo do localStorage
    this.nomeCorrentista = localStorage.getItem('nomeCorrentista') || '';

    // Garantindo que o saldo seja um número válido
    const saldo = localStorage.getItem('saldoCorrentista');
    this.saldoCorrentista = saldo ? parseFloat(saldo) : 0; // Se não houver saldo válido, define como 0
  }

  sacar() {
    const valorSaque = parseFloat(prompt('Digite o valor que deseja sacar (use ponto para separar centavos):') || '0');

    if (isNaN(valorSaque) || valorSaque <= 0) {
      alert('Digite um valor válido para saque.');
      return;
    }

    if (valorSaque > this.saldoCorrentista) {
      alert('Saldo insuficiente.');
      return;
    }

    const correntistaId = parseInt(localStorage.getItem('idCorrentista') || '0'); // Pegando o ID do correntista do localStorage

    // Chamando o serviço para realizar o saque
    this.correntistaService.realizarSaque(correntistaId, valorSaque).subscribe({
      next: (updatedCorrentista) => {
        // Verifica se 'saldo' é válido antes de atualizar
        this.saldoCorrentista = typeof updatedCorrentista.saldo === 'number' ? updatedCorrentista.saldo : 0;

        localStorage.setItem('saldoCorrentista', this.saldoCorrentista.toFixed(2)); // Armazena o saldo formatado com 2 casas decimais
        alert(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso!`);
      },
      error: (err) => {
        alert('Erro ao realizar o saque. Tente novamente.');
        console.error(err);
      },
    });
  }

  extrato() {
    this.router.navigate(['/tela-extrato']);
  }

  pix() {
    this.router.navigate(['/tela-pix']);
  }

  sair() {
    this.router.navigate(['/tela-login']);
  }

  investir() {
    this.router.navigate(['/tela-investimento']);
  }
}
