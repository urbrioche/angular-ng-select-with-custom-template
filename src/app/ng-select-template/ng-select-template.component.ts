import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-ng-select-template',
  templateUrl: './ng-select-template.component.html',
  styleUrls: ['./ng-select-template.component.css'],
})
export class NgSelectTemplateComponent implements OnInit {
  @Input() ngSelect: NgSelectComponent;
  @Input() maxItemCount = 3;
  @ViewChild('labelTemplate', { static: true })
  public labelTemplate: TemplateRef<any>;

  @ViewChild('headerTemplate', { static: true })
  public headerTemplate: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}

  selectAll() {
    this.ngSelect.itemsList.items.forEach((item) => this.ngSelect.select(item));
  }

  unselect() {
    this.ngSelect.itemsList.items.forEach((item) =>
      this.ngSelect.unselect(item)
    );
  }
}
