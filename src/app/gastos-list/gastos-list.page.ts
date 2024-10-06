import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.page.html',
  styleUrls: ['./gastos-list.page.scss'],
})
export class GastosListPage implements OnInit {
  gastos: any[] = [];

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    // Inscreva-se para obter atualizações na lista de gastos
    this.gastosService.getGastos().subscribe(gastos => {
      this.gastos = gastos;
    });
  }

  removerGasto(id: string) {
    this.gastosService.removerGasto(id);
  }
}
