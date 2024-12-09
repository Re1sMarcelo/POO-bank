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
  correntista = { cpf: '', senha: '' }; // Define o modelo para os dados do login.

  constructor(private router: Router, private httpClient: HttpClient) {}

  fazerLogin() {
    this.httpClient
  .post('http://localhost:8080/correntista/login', this.correntista) // Corrija a URL
  .subscribe({
    next: (response: any) => {
      if (response.sucesso) {
        alert('Login realizado com sucesso!');
        this.router.navigate(['/tela-inicial']);
      } else {
        alert('CPF ou senha inválidos!');
      }
    },
    error: (err) => {
      console.error(err);
      alert('Erro ao realizar login.');
    },
  });

  }

  cadastrar() {
    this.router.navigate(['/tela-cadastro']);
  }
}
