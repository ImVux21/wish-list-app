import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { FormsModule } from '@angular/forms';

const filterOptions = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>()
  option: any = 0;

  ngOnInit(): void {
    this.changeFilter(0);
  }

  changeFilter(value: any) {
    this.filter.emit(filterOptions[value]);
  }
}
