import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correntista = { cpf: '', senha: '' };

  constructor(private router: Router, private httpClient: HttpClient) {}

  fazerLogin() {
    this.httpClient
      .post('http://localhost:8080/correntista/login', this.correntista)
      .subscribe({
        next: (response: any) => {
          // Armazenando id, nome e saldo no localStorage
          localStorage.setItem('idCorrentista', response.id);
          localStorage.setItem('nomeCorrentista', response.nome);
          localStorage.setItem('saldoCorrentista', response.saldo); // Salva o saldo
          alert('Login realizado com sucesso!');
          this.router.navigate(['/tela-inicial']);
        },
        error: (err) => {
          console.error(err);
          alert('CPF ou senha inválidos!');
        },
      });
  }

  cadastrar() {
    this.router.navigate(['/tela-cadastro']);
  }
}
