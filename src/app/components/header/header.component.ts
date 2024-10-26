import { Component } from '@angular/core';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCount: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe(items => {
      this.cartCount = items.length;
    });
  }
}
