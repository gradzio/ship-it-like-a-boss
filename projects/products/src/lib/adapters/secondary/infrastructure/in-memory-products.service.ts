import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';

@Injectable()
export class InMemoryProductsService implements GetsAllProductDtoPort {
  constructor() {}

  getAll(): Observable<ProductDTO[]> {
    return of([
      {
        id: 1,
        name: 'Awesome TShirt',
        price: 2000,
        imageUrl:
          'https://res.cloudinary.com/teepublic/image/private/s--O0PdnLSE--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_442/c_crop,g_north_west,h_626,w_470,x_-14,y_-150/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-409,y_-475/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1608379128/production/designs/17597063_0.jpg',
      },
      {
        id: 2,
        name: 'Nice Jeans',
        price: 10000,
        imageUrl:
          'https://img01.ztat.net/article/spp-media-p1/c13d32c960993b5ea69ed14c96a1cf1c/539d1ca887cf4884a13e5321ec513485.jpg?imwidth=1800',
      },
      {
        id: 3,
        name: 'Lady shoes',
        price: 9000,
        imageUrl:
          'https://i.pinimg.com/originals/f6/58/3b/f6583b60c9db59fe394ef1b5aea52cda.jpg',
      },
      {
        id: 4,
        name: 'Hat',
        price: 5000,
        imageUrl:
          'https://q8y9x5z7.rocketcdn.me/wp-content/uploads/2020/05/web-adventurer-sand-rollable-mens-panama-hat-sun-pachacuti-002-category-v2-1920x1329.jpg',
      },
    ]);
  }
}
