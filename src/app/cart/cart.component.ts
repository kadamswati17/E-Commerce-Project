import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust path as necessary

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item);
  }
}
