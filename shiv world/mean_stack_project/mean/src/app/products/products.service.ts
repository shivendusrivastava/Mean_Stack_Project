import { Injectable } from "@angular/core";
import { IProducts } from "./products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http/src/response";


@Injectable()
export class ProductsService{
    private url = './api/products/products.json';
    private httpurl = 'http://localhost:3000/api/users'
    constructor(private _httpclient : HttpClient){

    }
getProducts(): Observable<IProducts[]>{
    return this._httpclient.get<IProducts[]>(this.httpurl);
    
}
private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
} 

}