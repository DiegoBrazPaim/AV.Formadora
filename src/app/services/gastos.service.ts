import { Injectable } from '@angular/core';
import { Gasto } from '../models/gasto.model';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private gastos: Gasto[] = [];
  private gastosSubject = new BehaviorSubject<Gasto[]>(this.gastos);

  constructor() {}

  addGasto(gasto: Gasto) {
    gasto.id = uuidv4();
    this.gastos.push(gasto);
    this.gastosSubject.next(this.gastos);
  }

  getGastos() {
    return this.gastosSubject.asObservable();
  }

  getTotalGastos() {
    // Somente contas as despesas
    return this.gastos.filter(gasto => gasto.tipo === 'despesa').reduce((total, gasto) => total + gasto.valor, 0);
  }

  getTotalDespesas() {
    return this.gastos
      .filter(gasto => gasto.tipo === 'despesa')
      .reduce((total, gasto) => total + gasto.valor, 0);
  }

  getTotalReceitas() {
    return this.gastos
      .filter(gasto => gasto.tipo === 'receita')
      .reduce((total, gasto) => total + gasto.valor, 0);
  }

  removerGasto(id: string) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.gastosSubject.next(this.gastos);
  }
}
