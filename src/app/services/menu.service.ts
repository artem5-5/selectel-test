import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

export interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: MenuCategory[] = [
    {
      id: 1,
      name: 'Тип 1',
      items: [
        { id: 1, name: 'Item 1', value: 20, checked: false },
        { id: 2, name: 'Item 2', value: 30, checked: false },
        { id: 3, name: 'Item 3', value: 40, checked: false },
        { id: 4, name: 'Item 4', value: 50, checked: false }
      ]
    },
    {
      id: 2,
      name: 'Тип 2',
      items: [
        { id: 5, name: 'Item A', value: 15, checked: false },
        { id: 6, name: 'Item B', value: 25, checked: false },
        { id: 7, name: 'Item C', value: 35, checked: false }
      ]
    }
  ];

  getMenu() {
    return this.menu;
  }

}