import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ProductGridComponent } from './product-grid.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule],
  declarations: [ProductGridComponent],
  providers: [],
  exports: [ProductGridComponent],
})
export class ProductGridComponentModule {}
