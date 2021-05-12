import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import {Route,RouterModule} from '@angular/router';

const routes: Route[] = [
  {
    path : '',
    component: OrdersComponent
  }
];
@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersModule { }
