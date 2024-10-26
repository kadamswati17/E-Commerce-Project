import { Component } from '@angular/core';

interface Category {
  name: string;
  image: string; // Ensure image is defined in the interface
}

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss'],
})
export class CategorySectionComponent {
  // categories: Category[] = [
  //   { name: 'Homemade Snacks Products', image: 'https://digiacai.com/wp-content/uploads/2023/07/The-rise-of-homemade-snacks.png' },
  //   { name: 'Sewing Cloths', image: 'https://c02.purpledshub.com/uploads/sites/51/2021/06/My-Fabrics-online-fabric-shop-8dbdf34.jpg?webp=1&w=1200' },
  //   { name: 'Home Decors Products', image: 'https://media.craftmaestros.com/media/magefan_blog/Elevate_Your_Home_Decor_With_Craft_Maestros.jpg' },
  //   { name: 'Costumes on Rent', image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=567,h=401,fit=crop/AwvrnRb8wJfKkx0x/animal-costumes-rental-AMqn74Q3E7sJrG0w.jpg' },
  
  // ];
}
