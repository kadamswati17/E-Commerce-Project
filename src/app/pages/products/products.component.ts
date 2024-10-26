import { Component } from '@angular/core';
import { CartService } from '../../cart.service'; 

interface product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] // Corrected from styleUrl to styleUrls
})
export class ProductsComponent {
  products: product[] = [
    {
      name: 'iPhone 13',
      price: 79999,
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-green-select?wid=500&hei=500&fmt=jpeg&qlt=95&op_usm=0.5,0.5&resMode=sharp2&op_usm=1.0,1.0'
    },
    {
      name: 'Samsung Galaxy Tab S7',
      price: 49999,
      image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/XD/SN/JS/51517768/samsung-tab-s7-27-81-cm-11-inch-6-gb-128-gb-wifi-mystic-black--500x500.jpg'
    },
    {
      name: 'Sony WH-1000XM4 Headphones',
      price: 24999,
      image: 'https://i.pinimg.com/736x/7e/4c/85/7e4c859f3101e36bb7bb7de91eb7edff.jpg'
    },
    {
      name: 'MacBook Air',
      price: 99999,
      image: 'https://images.unsplash.com/photo-1606248896999-387b3a9f621c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Dell XPS 13',
      price: 109999,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBgZw6leqA0CabSKRb5-vN80YFOGv6kk8ofIojlUKLZmCDEdw-9jdLUUGbILJfpR2Zms_BBIOU4ETm8ceoGCqpTVLbbeya751aglkIl2wTP-uoqEjZ4aFsCg'
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: product, addButton: HTMLElement) {
    this.cartService.addToCart(item);
    console.log(`${item.name} added to cart!`);
  
   // Show confirmation overlay
   const overlay = addButton.querySelector('.confirmation-overlay') as HTMLElement;
   overlay.classList.add('visible');
    setTimeout(() => {
      overlay.classList.remove('visible');
    }, 1000); // Delay for fade-out effect
  }
  
}
  