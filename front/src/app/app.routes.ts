import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaExtratoComponent } from './tela-extrato/tela-extrato.component';
import { TelaPixComponent } from './tela-pix/tela-pix.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'tela-inicial', component: TelaInicialComponent},
    { path: 'tela-cadastro', component: CadastroComponent},
    { path: 'tela-extrato', component: TelaExtratoComponent},
    { path: 'tela-pix', component: TelaPixComponent},
    {path: 'tela-login', component: LoginComponent}
];
