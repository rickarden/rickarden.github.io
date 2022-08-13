import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OldlistComponent } from './oldlist/oldlist.component';
import { ShoppinglistDetailsComponent } from './shoppinglist-details/shoppinglist-details.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'shopping-list', component: ShoppinglistComponent },
  { path: 'shopping-list-details/:id', component: ShoppinglistDetailsComponent },
  { path: 'old-list/:id', component: OldlistComponent },
  { path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
