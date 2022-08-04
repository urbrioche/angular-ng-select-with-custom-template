import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  @Input() ngSelect: NgSelectComponent;
  @Input() MaxItemCount = 3;
  constructor() {}

  ngOnInit() {}
}
