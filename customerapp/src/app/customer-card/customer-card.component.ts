import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../common/customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input()
  customers:Customer[] = [];
  
  @Output()
  delEvent:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCustomer(id:number):void {
    console.log("card ", id);
    this.delEvent.emit(id);
  }
}
