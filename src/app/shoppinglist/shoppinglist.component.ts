import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbdTypeaheadFocus } from '../typeahead-focus/typeahead-focus';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  @ViewChild('ngbdTypeaheadFocus', {static: true}) ngbdTypeaheadFocus!: NgbdTypeaheadFocus;
  @ViewChild('nameField', {static: true}) nameField!: ElementRef;

  public itemForm!: FormGroup;
  itemName: string = "itemName";
  itemCategory: string = "";
  now!: string;
  @Input() items: any[] = [];
  @Input() id: string = '';
  @Output() handlaClicked : EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      name: '',
      category: '',
      amount: ''
    });
  }

  ngOnInit(): void {

  };

  get newDisabled(){
    return this.nameField.nativeElement.value.length < 1;
  }

  nyVara(){
    if(this.itemForm.get('name')?.value != ''){
      let itemId = this.items.length;
      let newItem = {id: itemId, name: '', category: '', amount: 1};
      newItem.name = this.itemForm.get('name')?.value;
      newItem.category = this.ngbdTypeaheadFocus.model || 'Övrigt';
      newItem.amount = this.itemForm.get('amount')?.value || 1;

      this.items.push(newItem);

      this.now = this.getNow();
      this.itemForm.setValue({name: '',
        category: '',
        amount: ''}
      );
    }
  }

  sparaLista(){
    this.sorteraLista();
    let listnamn = (<HTMLInputElement>document.getElementById("list-namn"))?.value;
    localStorage.setItem(listnamn || this.getNow(), JSON.stringify(this.items));

  }

  sorteraLista(){
    this.items.sort((a,b) => a.category.localeCompare(b.category));
  }

  shoppa(){
    this.handlaClicked.emit();
  }

  getNow(){
    const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

    let d = new Date();
    return months[d.getMonth()] + " " + d.getDate();
  }

  removeItem(id:any){
    this.items = this.items.splice(id, 1);
  }

}
