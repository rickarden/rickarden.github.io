import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  //@ViewChild('ngbdTypeaheadFocus', {static: true}) ngbdTypeaheadFocus!: NgbdTypeaheadFocus;
  @ViewChild('nameField', {static: true}) nameField!: ElementRef;

  public itemForm!: FormGroup;
  itemName: string = "itemName";
  itemCategory: string = "";
  now!: string;
  kategorier = ['Bröd', 'Dryck', 'Frukt och Grönt', 'Kött Fisk Fågel', 'Mejeri', 'Papper och rengöring', 'Sötsaker', 'Övrigt'];
  file: any;
  listaSparad: boolean = false;
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
      //newItem.category = this.ngbdTypeaheadFocus.model || 'Övrigt';
      newItem.category = this.itemForm.get('category')?.value;
      console.log("category " + this.itemForm.get('category')?.value);
      console.dir(this.itemForm.get('category'));
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
    this.listaSparad = true;
  }

  sorteraLista(){
    this.items.sort((a,b) => a.category.localeCompare(b.category));
  }

  shoppa(){
    this.handlaClicked.emit();
    this.listaSparad = false;
  }

  getNow(){
    const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

    let d = new Date();
    return months[d.getMonth()] + " " + d.getDate();
  }

  removeItem(id:any){
    //this.items.splice(id, 1); does not work need the correct index
    for(let i = 0; i<this.items.length; i++){
      if(this.items[i].id == id){
        this.items.splice(i, 1);
        break;
      }
    }
  }

  exportera(){
    this._exportera(this.getNow(), JSON.stringify(this.items));
  }

  _exportera(filename: string, text: string){
    // Set up the link
    var link = document.createElement("a");
    link.setAttribute("target","_blank");
    if(Blob !== undefined) {
        var blob = new Blob([text], {type: "text/plain"});
        link.setAttribute("href", URL.createObjectURL(blob));
    } else {
        link.setAttribute("href","data:text/plain," + encodeURIComponent(text));
    }
    link.setAttribute("download",filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  importera(file: any){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      let resultArray = [];
      let resultString = fileReader.result;
      resultArray = JSON.parse(('[' + resultString + ']'));
      this.items = [];
      /*resultArray[0].forEach((element: { name: any; }, index: any, array: any) => {
        console.log(element.name); // 100, 200, 300
        console.log(index); // 0, 1, 2
        console.log(array); // same myArray object 3 times
      });*/
      resultArray[0].forEach(this.myFunction, this);
    }
    fileReader.readAsText(file);
  }

  myFunction(item: { id: any, name: string, category: string, amount: number }){
    console.log("item is: ");
    console.log(item);
    this.items.push({id: item.id, name: item.name, category: item.category, amount: item.amount});
  }


  fileChanged(e: any){
    //this.file = e.target.files[0];
    this.importera(e.target.files[0]);
  }

}
