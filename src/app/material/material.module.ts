//for importing and exporting material components

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];
@NgModule({
  imports: [ MaterialComponents  ],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
