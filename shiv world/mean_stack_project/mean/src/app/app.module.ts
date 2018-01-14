import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import {ProductsComponent} from './products/products.component'
import {AngularFormComponent} from './AngularForm/angularForm.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AngularFormComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
