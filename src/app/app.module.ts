import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RentalsComponent } from './pages/rentals/rentals.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FoodComponent } from './food/food.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HammerModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FeaturedcategoriesComponent } from './featuredcategories/featuredcategories.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CategorySectionComponent,
    ProductCardComponent,
    LoginComponent,
    RentalsComponent,
    ProductsComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    FoodComponent,
    FeaturedcategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    MatButtonModule,
    MatIconModule,
    // SwiperModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
