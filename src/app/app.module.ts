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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
