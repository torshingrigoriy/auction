import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SearchFormComponent } from './components/common/search-form/search-form.component';
import { CarouselComponent } from './components/common/carousel/carousel.component';
import { ProductsComponent } from './components/common/products/products.component';
import { ProductRatingComponent } from './components/common/product-rating/product-rating.component';
import { ProductComponent } from './components/pages/product/product.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {ChatpageComponent} from "./components/pages/chatpage/chatpage.component";
import { BasicChatComponent } from './components/common/basic-chat/basic-chat.component';
import { VipChatComponent } from './components/common/vip-chat/vip-chat.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import {CountLimiterPipe, FilterPipe} from "./services/pipes";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchFormComponent,
    CarouselComponent,
    ProductsComponent,
    ProductRatingComponent,
    ProductComponent,
    HomepageComponent,
    ChatpageComponent,
    BasicChatComponent,
    VipChatComponent,
    ProductsPageComponent,
    ProductCardComponent,
    CountLimiterPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
