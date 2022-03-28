import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseProductsService {
  constructor(private _client: AngularFirestore) {
  }
}
