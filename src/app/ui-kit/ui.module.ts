import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {
  MatButtonModule, MatCheckboxModule, MatStepperModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatButtonToggleModule, MatMenuModule, MatListModule, MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatRadioModule, MatPaginatorModule, MatExpansionModule, MatSelectModule, MatTreeModule, MatDatepickerModule, MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const IMPORT_EXPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ChartsModule,
  MatButtonModule, MatCheckboxModule, MatStepperModule, MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatListModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatRadioModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatTreeModule,
  MatDatepickerModule,
  MatCardModule,
  FlexLayoutModule
  
];


@NgModule({
  imports: IMPORT_EXPORT,
  exports: [IMPORT_EXPORT],
  declarations: [],
})
export class UiKitModule { }