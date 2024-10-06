import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = 'f973fa8c73ae4fba2bb71f00'; // Substitua pela sua chave de API
  private baseUrl = 'https://v6.exchangerate-api.com/v6/'; // URL da API

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.apiKey}/latest/${baseCurrency}`);
  }
}
