import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'tela-inicial', component: TelaInicialComponent},
    { path: 'tela-cadastro', component: TelaCadastroComponent}
];
