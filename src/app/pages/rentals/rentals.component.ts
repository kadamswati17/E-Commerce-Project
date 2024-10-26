import { Component } from '@angular/core';

interface RentalItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss'] // Make sure to create this file
})
export class RentalsComponent {
  rentals: RentalItem[] = [
    {
      name: 'Cloth & Costumes',
      image: 'https://truevo.com/wp-content/uploads/2021/08/2021-08-17-fashion-rentals2.jpg'
    },
    {
      name: 'Jewelry',
      image: 'https://i.ytimg.com/vi/e-jZEoln4fc/hqdefault.jpg'
    },
    // Add more rental items as needed
  ];
}
