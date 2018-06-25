import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/city/kharkiv', pathMatch: 'full' },
  { path: 'city/:city', component: FormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
