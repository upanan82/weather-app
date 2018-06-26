import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { WeatherComponent } from '../weather/weather.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    FormComponent,
    WeatherComponent
  ],
  exports: [
    FormComponent
  ],
  providers: []
})
export class FormModule { }
