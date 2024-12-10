import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correntista } from './model/correntista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorrentistaService {
  private apiUrl = 'http://localhost:8080/correntista';

  constructor(private http: HttpClient) {}

  public cadastrar(correntista: Correntista): Observable<any> {
    return this.http.post(`${this.apiUrl}`, correntista);
  }

  realizarSaque(correntistaId: number, valorSaque: number): Observable<Correntista> {
    return this.http.put<Correntista>(`${this.apiUrl}/saque/${correntistaId}`, { valorSaque });
  }
}
