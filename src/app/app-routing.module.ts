import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/pages/homepage/homepage.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {ChatpageComponent} from "./components/pages/chatpage/chatpage.component";
import {BasicChatComponent} from "./components/common/basic-chat/basic-chat.component";
import {VipChatComponent} from "./components/common/vip-chat/vip-chat.component";
import {ProductsPageComponent} from "./components/pages/products-page/products-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auction',
    pathMatch:  'full'
  },
  {
    path: 'products',
    component: ProductsPageComponent
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
    path: 'chat',
    component: ChatpageComponent,
    children: [
      {
        path: '',
        component: BasicChatComponent
      },
      {
        path: 'vip',
        component: VipChatComponent,
        outlet: 'vip'
      }
    ]
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
