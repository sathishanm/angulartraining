import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, from } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  customerBaseUrl:string = "http://localhost:1234/customers";
  // orderBaseUrl:string = "http://localhost:1234/orders";
  // Dependency Injection
  constructor(private http:HttpClient) { }

  getCustomers():Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerBaseUrl);
  }
  getCustomer(id:number):Observable<Customer> {
    return this.http.get<Customer>(this.customerBaseUrl + "/" + id);
  }

  addCustomer(customer:Customer): Observable<any> {
    return this.http.post(this.customerBaseUrl, customer);
  }

  updateCustomer(customer:Customer): Observable<any> {
    return this.http.put(this.customerBaseUrl + "/" + customer.id, customer);
  }

  deleteCustomer(id:number) :  Observable<any> {
    return this.http.delete(this.customerBaseUrl + "/" + id);
  }
}
