import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/customer';
import { DataService } from '../common/data.service';
import { Observable } from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'] 
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  original: Customer[] = [];
  searchText: string = "";
  isCard:boolean = true;
  customerObservable$!: Observable<Customer[]>;
  
  // DI
  constructor(private dataService:DataService) { 
    this.customerObservable$ = this.dataService.getCustomers().pipe(shareReplay());
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe(data => (this.customers = this.original = data));
  }

  deleteCustomerParent(id: number) {
    console.log("parent", id);
    // this.customers = this.customers.filter(c => c.id !== id);
    this.dataService.deleteCustomer(id).subscribe(data => console.log(data));
    this.dataService.getCustomers().subscribe(data => (this.customers = this.original = data));
  }

  filterCustomers() {
    // console.log(this.searchText)
    this.customers = this.original.filter(c => {
      if ((c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0) ||
        (c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0)) {
        return true;
      }
      return false;
    })
  }
}
