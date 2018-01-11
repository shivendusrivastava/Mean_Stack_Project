import {Component} from '@angular/core'
import { IProducts } from './products';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'pm-products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent implements OnInit{
    constructor(){
        this.filteredProducts = this.products;
        this.filterText = 'cart';
    }
    
    pageTitle: string = "Products List";
    showImage: boolean = true;
    buttonText: string = 'Show Image'
    productList:string = "Products List";    
    _filterText: string;    
    get filterText() : string{
    return this._filterText;
    }
    set filterText(value:string){
        this._filterText = value;
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
    products: IProducts[] = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "src/assets/images/Leaf-Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "src/assets/images/garden-cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "src/assets/images/rejon-Hammer.png"
    },
    {
        "productId": 8,        
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "src/assets/images/egore911-saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "src/assets/images/xbox-controller-01.png"
    }];
    ngOnInit():void{
    
    }
}