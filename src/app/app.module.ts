import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { MainComponent } from './main/main.component';
import { ShoppinglistDetailsComponent } from './shoppinglist-details/shoppinglist-details.component';
import { HelpComponent } from './help/help.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAccordionBasicComponent } from './accordion-basic/accordion-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    MainComponent,
    ShoppinglistDetailsComponent,
    HelpComponent,
    NgbdAccordionBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
