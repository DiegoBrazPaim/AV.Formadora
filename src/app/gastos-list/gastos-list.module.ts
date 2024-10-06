import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosListPageRoutingModule } from './gastos-list-routing.module';

import { GastosListPage } from './gastos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosListPageRoutingModule
  ],
  declarations: [GastosListPage]
})
export class GastosListPageModule {}
