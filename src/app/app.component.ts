import { WishListComponent } from "./wish-list/wish-list.component";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/WishItem';
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";

@Component({
  selector: 'app-root',
  // declare on local component with imports
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Visit the Grand Canyon'),
    new WishItem('Go skydiving', true),
    new WishItem('Travel to Europe'),
  ];
  title = 'wish-list';
  visibleItems = this.items;
  filter: any = () => { };
}
