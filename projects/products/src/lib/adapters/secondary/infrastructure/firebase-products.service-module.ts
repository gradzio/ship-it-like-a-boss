import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseProductsService } from './firebase-products.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseProductsService],
  	exports: [] })
export class FirebaseProductsServiceModule {
}
