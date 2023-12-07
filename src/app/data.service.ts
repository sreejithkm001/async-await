// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  getData() {
    return this.data;
  }

  deleteItem(id: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.data = this.data.filter((item) => item.id !== id);
        resolve();
      }); 
    });
  }
}
