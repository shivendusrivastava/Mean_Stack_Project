import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import {ProductsComponent} from './products/products.component'
import {AngularFormComponent} from './AngularForm/angularForm.component'
import { StarComponent } from './shared/star.component';
import { ProductsService } from './products/products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AngularFormComponent,
    StarComponent    
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
