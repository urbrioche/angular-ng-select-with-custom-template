import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
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
}
