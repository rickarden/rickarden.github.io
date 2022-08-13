import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { NgbdTypeaheadFocus } from './typeahead-focus/typeahead-focus';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { OldlistComponent } from './oldlist/oldlist.component';
import { ShoppinglistDetailsComponent } from './shoppinglist-details/shoppinglist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    NgbdTypeaheadFocus,
    MainComponent,
    OldlistComponent,
    ShoppinglistDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
