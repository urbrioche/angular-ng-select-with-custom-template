import { Component, Input, OnInit } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-ng-select-custom-header',
  templateUrl: './ng-select-custom-header.component.html',
  styleUrls: ['./ng-select-custom-header.component.css'],
})
export class NgSelectCustomHeaderComponent implements OnInit {
  @Input() ngSelect: NgSelectComponent;
  constructor() {}

  ngOnInit() {}

  selectAll() {
    this.ngSelect.itemsList.items.forEach((item) => this.ngSelect.select(item));
  }

  unselect() {
    this.ngSelect.itemsList.items.forEach((item) =>
      this.ngSelect.unselect(item)
    );

    this.ngSelect.close();
  }
}
