import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  totalGastos: number = 0;
  totalDespesas: number = 0;
  totalReceitas: number = 0;
  rates: any = {};

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    // Assine o observable para obter gastos e calcular os totais
    this.gastosService.getGastos().subscribe(gastos => {
      this.totalGastos = this.gastosService.getTotalGastos(); // Soma apenas as despesas
      this.totalDespesas = this.gastosService.getTotalDespesas(); // Total de despesas
      this.totalReceitas = this.gastosService.getTotalReceitas(); // Total de receitas
    });
  }
}
