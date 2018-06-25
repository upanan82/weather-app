import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { ApiModule } from '../api/api.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApiModule
  ],
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
