import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common'; // Adiciona CommonModule e DecimalPipe

@Component({
  selector: 'app-tela-investimento',
  standalone: true,
  imports: [CommonModule], // Importa o CommonModule aqui
  templateUrl: './tela-investimento.component.html',
  styleUrls: ['./tela-investimento.component.css'],
  providers: [DecimalPipe], // Adiciona o DecimalPipe nos providers
})
export class TelaInvestimentoComponent {
  aporteMensal: number = 0;
  jurosMensal: number = 0.009; // 0,9% ao mês
  totalMonths: number = 0;
  aporteTotal: number = 0;

  constructor(private decimalPipe: DecimalPipe) {} // Injeta o DecimalPipe

  calculateMonths(): void {
    const inputAporte = (document.getElementById('valorAporte') as HTMLInputElement).value;
    const dataInicio = (document.getElementById('dataInicio') as HTMLInputElement).value;
    const dataFim = (document.getElementById('dataFim') as HTMLInputElement).value;

    if (inputAporte && dataInicio && dataFim) {
      this.aporteMensal = parseFloat(inputAporte);
      const startDate = new Date(dataInicio);
      const endDate = new Date(dataFim);

      const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
      const monthsDifference = endDate.getMonth() - startDate.getMonth();
      this.totalMonths = yearsDifference * 12 + monthsDifference;

      if (this.totalMonths < 0) {
        this.totalMonths = 0;
      }

      this.calculateAporteComJuros();
    }
  }

  calculateAporteComJuros(): void {
    let valorAcumulado = 0;

    for (let i = 0; i < this.totalMonths; i++) {
      valorAcumulado += this.aporteMensal;
      valorAcumulado += valorAcumulado * this.jurosMensal;
    }

    // Formata o valor com duas casas decimais
    this.aporteTotal = parseFloat(
      this.decimalPipe.transform(valorAcumulado, '1.2-2') || '0'
    );
  }
}
