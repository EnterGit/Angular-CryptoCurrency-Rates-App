import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  payload;

  constructor(private api: ApiService) {
    this.api.currentMessage.subscribe(message => this.payload = message);
  }

  ngOnInit() {
    this.api.initTicker();

    setInterval(() => {
        this.api.initTicker();
    }, 35000);
  }

}
