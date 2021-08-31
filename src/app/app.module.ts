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
import { ProductComponent } from './components/common/product/product.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
