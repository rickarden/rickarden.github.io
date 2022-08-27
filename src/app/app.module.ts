import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { MainComponent } from './main/main.component';
import { ShoppinglistDetailsComponent } from './shoppinglist-details/shoppinglist-details.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    MainComponent,
    ShoppinglistDetailsComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
