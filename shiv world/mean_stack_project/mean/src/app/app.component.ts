import {Component} from '@angular/core';
import { ProductsService } from './products/products.service';



@Component({
selector:'app-root',
// templateUrl:'./app.component.html'
templateUrl:'./app.component.html',
providers:[ProductsService]

})

export class AppComponent{
pageTitle: string = 'Angular World';

}