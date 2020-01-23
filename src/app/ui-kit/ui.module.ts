import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const IMPORT_EXPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];


@NgModule({
  imports: IMPORT_EXPORT,
  exports: [IMPORT_EXPORT],
  declarations: [],
})
export class UiKitModule { }