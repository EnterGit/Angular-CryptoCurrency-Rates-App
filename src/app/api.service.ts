import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://api.coinmarketcap.com/v2';

  payload: any;

  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  initTicker() {
    this.http.get(this.URL + '/ticker/').subscribe(data => {
      this.payload = data;
      this.messageSource.next(this.payload);
      console.log('API Call');
    });
  }

}
