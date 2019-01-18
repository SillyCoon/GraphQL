import { ItemsService } from './../items.service';
import { Apollo } from 'apollo-angular';
import { Item } from './../models/item';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'apollo-client/util/Observable';

import * as Query from '../global-query';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  loading: boolean;
  items: Item[];

  currency: any = null;

  displayedColumns = ['id', 'name', 'price', 'description'];

  private querySubscription: Subscription;

  currencyForm = new FormGroup({
    currency: new FormControl('')
  });

  constructor(private apollo: Apollo, private itemService: ItemsService) { }

  ngOnInit() {
    this.getCurrency('AUD');
    this.querySubscription = this.apollo.watchQuery<any>({
      query: Query.Items
    }).valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.items = data.items;
      });
  }

  getCurrency(currencyCode: string) {
    this.itemService.getCurrency().subscribe((currencyList: any) => {
      this.currency = currencyList.Valute[currencyCode];
    });
  }



  changeCurrency() {
    if (this.currency !== null) {
      this.items.forEach(item => {
        item.price = this.currency.Value as number;
      });
    }
    this.getCurrency(this.currencyForm.value['currency']);
    this.items.forEach(item => {
      item.price *= this.currency.Value as number;
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }



}
