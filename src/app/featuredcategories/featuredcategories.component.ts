import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-featuredcategories',
  templateUrl: './featuredcategories.component.html',
  styleUrls: ['./featuredcategories.component.scss']
})
export class FeaturedcategoriesComponent {
  categories = [
    { name: 'Milk Products', icon: 'https://media.istockphoto.com/id/544807136/photo/various-fresh-dairy-products.jpg?s=612x612&w=0&k=20&c=U5T70bi24itoTDive1CVonJbJ97ChyL2Pz1I2kOoSRo=' },
    { name: 'Sweets', icon: 'https://www.shutterstock.com/image-photo/group-indian-assorted-sweets-mithai-260nw-2068990322.jpg' },
    { name: 'Spices', icon: 'https://t4.ftcdn.net/jpg/01/02/58/91/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg' },
    { name: 'Pickles & Chutneys', icon: 'https://www.shutterstock.com/shutterstock/photos/274354133/display_1500/stock-photo-indian-pickles-on-a-white-background-in-a-glass-bowl-274354133.jpg' },
    { name: 'Fasting Food', icon: 'https://s3.envato.com/files/289583878/DSC_4459.jpg' },
    { name: 'Namkeens', icon: 'https://t4.ftcdn.net/jpg/02/90/75/05/360_F_290750591_fuodp0x8ZeM92JFZ6qf3S9Gamw14DPbj.jpg' },
    { name: 'Staples', icon: 'https://researchoutreach.org/wp-content/uploads/2020/12/shutterstock_1861580353.jpg' },
  ];
}