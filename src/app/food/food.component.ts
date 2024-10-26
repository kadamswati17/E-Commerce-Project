import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust path as necessary

interface FoodItem {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  foodItems: FoodItem[] = [
    {
      name: 'Pizza',
      price: 299,
      image: 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg'
    },
    {
      name: 'Burger',
      price: 149,
      image: 'https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?semt=ais_hybrid'
    },
    {
      name: 'Sushi',
      price: 499,
      image: 'https://images3.alphacoders.com/108/1088623.jpg'
    },
    {
      name: 'Pasta',
      price: 199,
      image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg'
    },
    {
      name: 'Salad',
      price: 129,
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?cs=srgb&dl=pexels-chanwalrus-1059905.jpg&fm=jpg'
    },
    {
      name: 'Ice Cream',
      price: 79,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg'
    },
    {
      name: 'Sandwich',
      price: 89,
      image: 'https://img.freepik.com/free-photo/ham-cheese-toast_1147-511.jpg?semt=ais_hybrid'
    },
    {
      name: 'Pastry',
      price: 159,
      image: 'https://images2.alphacoders.com/984/984184.jpg'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: FoodItem, productCard: HTMLElement) {
    this.cartService.addToCart(item);
    console.log(`${item.name} added to cart!`);

    // Show confirmation overlay
    const overlay = productCard.querySelector('.confirmation-overlay') as HTMLElement;
    overlay.classList.add('visible');
    setTimeout(() => {
      overlay.classList.remove('visible');
    }, 1000); // Delay for fade-out effect
  }
}
