import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { ApiModule } from '../api/api.module';
import { AppService } from '../app.service';

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
  ],
  providers: [
    AppService
  ]
})
export class FormModule { }
