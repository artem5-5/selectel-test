import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, MenuCategory, MenuItem } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categories: MenuCategory[] = [];
  currentCategory!: MenuCategory;

  constructor(private menuService: MenuService) {
    this.categories = this.menuService.getMenu();
    this.currentCategory = this.categories[0];
  }

  selectCategory(category: MenuCategory) {
    this.currentCategory = category;
  }

  toggleItem(item: MenuItem) {
    item.checked = !item.checked;
  }

  get selectedItems() {
    return this.currentCategory.items.filter(i => i.checked);
  }

  get totalCount() {
    return this.selectedItems.length;
  }

  get totalValue() {
    return this.selectedItems.reduce((sum, i) => sum + i.value, 0);
  }

}