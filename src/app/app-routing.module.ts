import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/pages/homepage/homepage.component";
import {ProductComponent} from "./components/common/product/product.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auction',
    pathMatch:  'full'
  },
  {
    path: 'auction',
    component: HomepageComponent
  },
  {
    path: 'auction/product/:id',
    component: ProductComponent
  },
  {
    path: '**',
    redirectTo: 'auction'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
