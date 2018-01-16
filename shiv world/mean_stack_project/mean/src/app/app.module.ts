import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {ProductsComponent} from './products/products.component'
import {AngularFormComponent} from './AngularForm/angularForm.component'
import { StarComponent } from './shared/star.component';
import { ProductsService } from './products/products.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AngularFormComponent,
    StarComponent,        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'productList',component: ProductsComponent},
      {path:'angForm',component: AngularFormComponent },
      {path:'',redirectTo:'productList',pathMatch:'full'}

    ],{useHash:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
