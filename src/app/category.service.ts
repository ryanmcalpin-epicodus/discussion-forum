import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

  getCategoryById(categoryId: number) {
    for (var i = 0; i <= CATEGORIES.length - 1; i++) {
      if (CATEGORIES[i].id === categoryId) {
        return CATEGORIES[i];
      }
    }
  }
}
