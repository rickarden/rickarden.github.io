import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist-details',
  templateUrl: './shoppinglist-details.component.html',
  styleUrls: ['./shoppinglist-details.component.css']
})
export class ShoppinglistDetailsComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() clickedItems: any[] = [];

  constructor() {

  }

  ngOnInit(): void {

  };

  onRowClicked(itemId: any){
    this.clickedItems.push(itemId);
  }

}
