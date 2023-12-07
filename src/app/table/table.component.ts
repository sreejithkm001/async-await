// src/app/table/table.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data: any[] = []; // Initialize the property

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  async deleteItem(id: number) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await this.dataService.deleteItem(id);
        await this.loadData();
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting item:', error);
        Swal.fire('Error', 'An error occurred while deleting the item.', 'error');
      }
    }
  }

  private async loadData() {
    this.data = this.dataService.getData();
  }
}
