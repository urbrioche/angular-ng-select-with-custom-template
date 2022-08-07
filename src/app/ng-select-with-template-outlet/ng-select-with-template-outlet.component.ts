import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-ng-select-with-template-outlet',
  templateUrl: './ng-select-with-template-outlet.component.html',
  styleUrls: ['./ng-select-with-template-outlet.component.css'],
})
export class NgSelectWithTemplateOutletComponent implements OnInit {
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  cities = ['Taipei', 'Taichung', 'Kaohsiung'];

  // angular 14 type control
  form = this.fb.group({
    cities: this.fb.control([], {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    numbers: this.fb.control(['1', '3', '5']),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  selectAll(ngSelect: NgSelectComponent) {
    ngSelect.itemsList.items.forEach((item) => ngSelect.select(item));
  }

  unselect(ngSelect: NgSelectComponent) {
    ngSelect.itemsList.items.forEach((item) => ngSelect.unselect(item));

    ngSelect.close();
  }
}
