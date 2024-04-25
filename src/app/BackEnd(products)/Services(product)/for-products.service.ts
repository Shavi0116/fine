//For API call functions
//we will require http client module

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',

})
export class ForProductsService {

  constructor(private http: HttpClient) { }

  //API CALLS

  getAllProducts(){
    return this.http.get('https://www.goodreads.com/genres/list?utf8=%E2%9C%93&filter=top-level')
  }
}
