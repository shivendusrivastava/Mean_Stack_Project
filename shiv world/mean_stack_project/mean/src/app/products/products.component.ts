import {Component} from '@angular/core'
import { IProducts } from './products';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductsService } from './products.service';



@Component({
    selector: 'pm-products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent implements OnInit{
    constructor(private _productService : ProductsService){        
    }
    
    pageTitle: string = "Products List";
    showImage: boolean = true;
    buttonText: string = 'Show Image'
    productList:string = "Products List";    
    _filterText: string;   
    errorMessage: any[]; 
    get filterText() : string{
    return this._filterText;
    }
    //filter from setter propeerty of filtertext
    set filterText(value:string){
        this._filterText = value;
        //this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products
    }
    
    //filter from ngmodel change 
    changefilter(filtertxt): void {        
        this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products
    }

    performFilter(filterby: string): IProducts[]{
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product:IProducts) =>
        product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);        

    }
    
    ChangeImage(): void{
        this.showImage = !this.showImage;        
    } 
    filteredProducts: IProducts[];
    products: IProducts[] = [];
    ngOnInit():void{
        //used to initialize the filter pre written text as using ngmodelchange which will only fire on change , not on initial value
        this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }
            ,error =>this.errorMessage = <any>error)
        
        this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products

    }
    onRatingClicked(message: string) : void{
    this.productList = 'Products List '+ message;

    } 
}