import {
  ComponentFactoryResolver,
  Directive,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgSelectTemplateComponent } from './ng-select-template/ng-select-template.component';

@Directive({
  selector: '[appMyNgLabel]',
})
export class MyNgLabelDirective {
  @Input() maxItemCount = 3;
  constructor(
    private ngSelect: NgSelectComponent,
    // angular 12 should use this
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit() {
    // const component = this.vcr.createComponent(NgSelectTemplateComponent);
    // console.log(component.instance.maxItemCount);
    // this.ngSelect.labelTemplate = component.instance.labelTemplate;
    // component.instance.maxItemCount = 1;
    // component.instance.ngSelect = this.ngSelect;
  }

  ngAfterViewInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      NgSelectTemplateComponent
    );
    const component = this.vcr.createComponent(factory);
    // angular 13 above use this
    // const component = this.vcr.createComponent(NgSelectTemplateComponent);
    console.log(component.instance.maxItemCount);
    this.ngSelect.multiLabelTemplate = component.instance.labelTemplate;
    component.instance.maxItemCount = this.maxItemCount;
    component.instance.ngSelect = this.ngSelect;
  }
}
