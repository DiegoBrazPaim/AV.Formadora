import { Component } from '@angular/core';
import { GastosService } from '../services/gastos.service';
import { Router } from '@angular/router';
import { Gasto } from '../models/gasto.model';  // Certifique-se de importar o modelo

@Component({
  selector: 'app-add-gastos',
  templateUrl: './add-gastos.page.html',
  styleUrls: ['./add-gastos.page.scss'],
})
export class AddGastosPage {
  descricao: string = '';
  valor: number = 0;
  tipo: 'despesa' | 'receita' = 'despesa';
  categoria: string = '';

  constructor(private gastosService: GastosService, private router: Router) {}

  onSubmit() {
    const novoGasto: Gasto = {  // Defina o tipo de novoGasto como Gasto
      id: '',  // O id será gerado pelo serviço, então podemos iniciar com uma string vazia
      descricao: this.descricao,
      valor: this.valor,
      tipo: this.tipo,
      categoria: this.categoria,
      data: new Date().toISOString()  // A data atual em formato ISO
    };

    this.gastosService.addGasto(novoGasto);  // O id será adicionado aqui
    this.router.navigate(['/home']);
  }
}
