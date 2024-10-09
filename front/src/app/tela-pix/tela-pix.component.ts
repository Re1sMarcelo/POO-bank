import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Para o ngModel
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel'; // Importar FloatLabelModule
import { Correntista } from '../model/correntista';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-tela-pix', 
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, FloatLabelModule], // Adicionar FloatLabelModule
  templateUrl: './tela-pix.component.html',
  styleUrls: ['./tela-pix.component.css'] // Corrigir para styleUrls
})
export class TelaPixComponent {
  dadosCadastrais = new Correntista();

  constructor(
    private service: CorrentistaService,
    private router: Router
  ) {}

  voltar() {
    this.router.navigate(['/tela-inicial']);
  }
}
