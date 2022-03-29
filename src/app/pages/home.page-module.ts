import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ProductListComponentModule } from '../../../projects/products/src/lib/adapters/primary/ui/product-list.component-module';
import { InMemoryProductsServiceModule } from '../../../projects/products/src/lib/adapters/secondary/infrastructure/in-memory-products.service-module';
import { ProductGridComponentModule } from '../../../projects/products/src/lib/adapters/primary/ui/product-grid.component-module';
import { IfFlagDirectiveModule } from '@feature-flags';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    ProductListComponentModule,
    InMemoryProductsServiceModule,
    ProductGridComponentModule,
    IfFlagDirectiveModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
