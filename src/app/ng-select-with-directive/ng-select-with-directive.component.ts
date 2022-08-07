import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-select-with-directive',
  templateUrl: './ng-select-with-directive.component.html',
  styleUrls: ['./ng-select-with-directive.component.css']
})
export class NgSelectWithDirectiveComponent implements OnInit {
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  

}