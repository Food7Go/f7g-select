import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F7gSelectComponent } from './f7g-select.component';
// mat component
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [F7gSelectComponent],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule],
  exports: [F7gSelectComponent],
})
export class F7gSelectModule {}
