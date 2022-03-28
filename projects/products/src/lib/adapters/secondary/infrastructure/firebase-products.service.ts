import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';

@Injectable()
export class FirebaseProductsService implements GetsAllProductDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<ProductDTO[]> {
    return this._client
      .collection<ProductDTO>('products')
      .valueChanges({ idField: 'id' });
  }
}
