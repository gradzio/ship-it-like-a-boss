import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
