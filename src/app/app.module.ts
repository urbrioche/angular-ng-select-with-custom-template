import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MyNgLabelDirective } from './my-ng-label.directive';
import { NgSelectTemplateComponent } from './ng-select-template/ng-select-template.component';
import { MyNgHeaderDirective } from './my-ng-header.directive';
import { NgSelectWithDirectiveComponent } from './ng-select-with-directive/ng-select-with-directive.component';
import { NgSelectWithTemplateOutletComponent } from './ng-select-with-template-outlet/ng-select-with-template-outlet.component';
import { CommonModule } from '@angular/common';
import { NgSelectWithComponentComponent } from './ng-select-with-component/ng-select-with-component.component';
import { NgSelectCustomLabelComponent } from './ng-select-custom-label/ng-select-custom-label.component';
import { NgSelectCustomHeaderComponent } from './ng-select-custom-header/ng-select-custom-header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgSelectModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyNgLabelDirective,
    MyNgHeaderDirective,
    NgSelectTemplateComponent,
    NgSelectWithDirectiveComponent,
    NgSelectWithTemplateOutletComponent,
    NgSelectWithComponentComponent,
    NgSelectCustomLabelComponent,
    NgSelectCustomHeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
