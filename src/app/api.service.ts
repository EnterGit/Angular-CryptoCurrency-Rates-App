import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://api.coinmarketcap.com/v2';

  constructor(private http: HttpClient) { }

  initTicker() {
    return this.http.get(this.URL + '/ticker/');
  }

}
