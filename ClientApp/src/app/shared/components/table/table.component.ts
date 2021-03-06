import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  @Input() headings;
  @Input() data;
  selectedValue: string;
  itemsPerPage = 2;

  constructor() { }

  sortAscByKey(array, key) {
    return array.sort(function(a, b) {
        const x = a[key]; const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  sortDescByKey(array, key) {
    return array.sort(function(a, b) {
      const x = a[key]; const y = b[key];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
  }

}
