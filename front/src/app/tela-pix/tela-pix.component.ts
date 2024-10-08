import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-tela-pix', 
  standalone: true,
  imports: [],
  templateUrl: './tela-pix.component.html',
  styleUrl: './tela-pix.component.css'
})
export class TelaPixComponent {
  constructor(private router:Router){}

  voltar (){
    this.router.navigate(['/tela-inicial'])
  }
}
