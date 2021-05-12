import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Route,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HoverDirective } from './common/hover.directive';
import { TextconverterPipe } from './textconverter.pipe';
import { HomeComponent } from './home/home.component';
import { LinkactivateGuard } from './linkactivate.guard';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { MyhttpInterceptor } from './myhttp.interceptor';
 

const routes: Route[] = [
  {
    path : 'customers',
    component: CustomersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'orders',
    canActivate: [LinkactivateGuard],
    loadChildren: () => import('./orders/orders.module').then(m  => m.OrdersModule)
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: '',
       component: HomeComponent
  },
  {
    path : '**',
    component: CustomersComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerCardComponent,
    CustomerListComponent,
    HoverDirective,
    TextconverterPipe,
    HomeComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : MyhttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
