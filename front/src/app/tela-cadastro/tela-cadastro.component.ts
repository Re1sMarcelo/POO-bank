import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CorrentistaService } from '../correntista.service';
import { Correntista } from '../../app/model/correntista';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.css'
})
export class CadastroComponent {

  dadosCadastrais = new Correntista();
  constructor(
    private service: CorrentistaService
  ) {}
  clickSalvar(): void {
    this.service.cadastrar(this.dadosCadastrais).subscribe ( resposta => {
      alert("Cadastrado com sucesso!");
    })
  }
}
