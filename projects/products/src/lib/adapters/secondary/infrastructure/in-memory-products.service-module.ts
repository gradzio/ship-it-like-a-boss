import { NgModule } from '@angular/core';
import { InMemoryProductsService } from './in-memory-products.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/gets-all-product.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryProductsService,
    { provide: GETS_ALL_PRODUCT_DTO, useExisting: InMemoryProductsService },
  ],
  exports: [],
})
export class InMemoryProductsServiceModule {}
