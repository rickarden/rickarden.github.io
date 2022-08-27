import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tidigare: any[] = [];
  showList: boolean = false;
  showSavedLists: boolean = true;
  shoppinglist: any[] = [];
  handlaMode: boolean = false;
  clickedItems: any[] = [];
  showHelp: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tidigare = [];
    for(let i = 0; i < localStorage.length; i++){
      let keyName = localStorage.key(i) || '';
      console.log("printing list " + i + " keyName " + keyName);
      let listLS = localStorage.getItem(keyName);

      //console.log(listLS);
      let listObj = {
        index: i,
        name: keyName,
        list: listLS
      };
      this.tidigare.push(listObj);
    }
  }

  goHome(){
    this.toggleListForm(false);
  }

  nyLista(){
    this.shoppinglist = [];
    this.toggleListForm(true);
  }

  onListClick(item: any){
    let list = localStorage.getItem(item);
    this.shoppinglist = JSON.parse(list || "[]");

    this.toggleListForm(true);
  }

  helpClicked(){
    this.showHelp = true;
    this.showList = false;
    this.showSavedLists = false;
    this.handlaMode = false;
    this.clickedItems = [];
  }

  toggleListForm(show: boolean){
    this.showHelp = false;
    this.showList = show;
    this.showSavedLists = !show;
    this.handlaMode = false;
    this.clickedItems = [];
  }

  handlaClickedHandler(){
    this.showHelp = false;
    this.clickedItems = [];
    this.showList = false;
    this.showSavedLists = false;
    this.handlaMode = true;
  }

}
