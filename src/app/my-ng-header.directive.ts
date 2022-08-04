import {
  ComponentFactoryResolver,
  Directive,
  ViewContainerRef,
} from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgSelectTemplateComponent } from './ng-select-template/ng-select-template.component';

@Directive({
  selector: '[appMyNgHeader]',
})
export class MyNgHeaderDirective {
  constructor(
    private ngSelect: NgSelectComponent,
    // angular 12 should use this
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      NgSelectTemplateComponent
    );
    const component = this.vcr.createComponent(factory);
    // angular 13 above use this
    // const component = this.vcr.createComponent(NgSelectTemplateComponent);
    this.ngSelect.headerTemplate = component.instance.headerTemplate;
    component.instance.ngSelect = this.ngSelect;
  }
}
