import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>(this.loadCartItems());
  cartItems$ = this.cartItems.asObservable();

  private loadCartItems(): CartItem[] {
    if (typeof window !== 'undefined' && localStorage) {
      const items = localStorage.getItem('cartItems');
      return items ? JSON.parse(items) : [];
    }
    return [];
  }

  private saveCartItems(items: CartItem[]): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }
  }

  getCartItems() {
    return this.cartItems$;
  }

  addToCart(item: CartItem) {
    const items = this.cartItems.getValue();
    const updatedItems = [...items, item];
    this.cartItems.next(updatedItems);
    this.saveCartItems(updatedItems);
  }

  removeFromCart(item: CartItem) {
    const items = this.cartItems.getValue().filter(cartItem => cartItem.name !== item.name);
    this.cartItems.next(items);
    this.saveCartItems(items);
  }

  // New method to clear all items from the cart
  clearCart() {
    this.cartItems.next([]); // Clear the BehaviorSubject
    this.saveCartItems([]);  // Clear localStorage
  }
}
