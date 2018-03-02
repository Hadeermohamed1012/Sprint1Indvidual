import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number,seller:string , component: string) {
    return this.httpClient.post(environment.apiUrl + 'hadeer/createProduct', {'name':name, 'price':price,'seller':seller,'component':component});
  }

  getProducts(){
    return this.httpClient.get(environment.apiUrl + 'hadeer/getProducts');
  }

  updateProduct(pid: object,name:string, price:number,seller:string, component: string ) {
    return this.httpClient.patch(environment.apiUrl + 'hadeer/updateProduct/'+pid, {'name':name,'price':price,'seller':seller,'component':component});
  }

  deleteProduct(id:object){
   return this.httpClient.delete(environment.apiUrl +'hadeer/deleteProduct/' +id );
}
}
