import { Component, Input, OnInit } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-ng-select-custom-label',
  templateUrl: './ng-select-custom-label.component.html',
  styleUrls: ['./ng-select-custom-label.component.css'],
})
export class NgSelectCustomLabelComponent implements OnInit {
  @Input() ngSelect: NgSelectComponent;
  @Input() maxItemCount = 3;
  constructor() {}

  ngOnInit() {}
}
