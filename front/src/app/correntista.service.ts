import { Injectable } from '@angular/core';
import { Correntista } from './model/correntista';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(
    private http: HttpClient
  ) { }

  public cadastrar (Correntista: Correntista)  <any> {
    return this.http.post("http://localhost:3000")
  }
}
