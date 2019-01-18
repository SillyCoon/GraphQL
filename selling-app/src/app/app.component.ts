import { ItemsService } from './items.service';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import * as Query from './global-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'selling-app';

  constructor() { }
  ngOnInit(): void {
  }


}
