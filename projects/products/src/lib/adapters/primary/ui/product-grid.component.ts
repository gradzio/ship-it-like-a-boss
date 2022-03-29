import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  GetsAllProductDtoPort,
  GETS_ALL_PRODUCT_DTO,
} from '../../../application/ports/secondary/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';

@Component({
  selector: 'lib-product-grid',
  templateUrl: './product-grid.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridComponent {
  products$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
  ) {}
}
