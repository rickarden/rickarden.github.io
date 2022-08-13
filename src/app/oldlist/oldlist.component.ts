import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oldlist',
  templateUrl: './oldlist.component.html',
  styleUrls: ['./oldlist.component.css']
})
export class OldlistComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription;
  shoppinglist: any[] = [];
  id: any;

  constructor(private _ActivatedRoute:ActivatedRoute,
              private router:Router) {

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');

      let list = localStorage.getItem(this.id.replace(':', ''));
      this.shoppinglist = JSON.parse(list || "[]");
    }
  )};

  klonaLista(){
    this.router.navigate(["/shopping-list-details", this.id]);
  }

}
