import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHomeComponent } from './pages';
import { OrderListComponent, OrderDetailComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderHomeComponent, OrderListComponent, OrderDetailComponent]
})
export class OrderModule { }