import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Declare 'featuredProducts' array here
  featuredProducts = [
    { name: 'Product 1', price: 299, image: 'https://www.shutterstock.com/image-photo/cooking-ingredients-colorful-variety-spices-260nw-2355855733.jpg' },
    { name: 'Product 2', price: 399, image: 'https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=' },
    { name: 'Product 3', price: 499, image: 'https://img.freepik.com/free-photo/spoon-tins-with-spices_23-2147894883.jpg?t=st=1729878338~exp=1729881938~hmac=dee33a6f71f82e7209ee1ca103b88177bd699c62c1956359dcd6b1dabdceb8b0&w=996' },
    { name: 'Product 4', price: 399, image: 'https://media.istockphoto.com/id/941858854/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=-quRLbD1Hkd2-i_I-uqJltiA516alqGNojlobB6nZ7A=' },
    
  ];
}
