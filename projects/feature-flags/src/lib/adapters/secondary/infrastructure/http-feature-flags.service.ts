import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetsAllFeatureFlagDtoPort } from '../../../application/ports/secondary/gets-all-feature-flag.dto-port';
import { FeatureFlagDTO } from '../../../application/ports/secondary/feature-flag.dto';

@Injectable()
export class HttpFeatureFlagsService implements GetsAllFeatureFlagDtoPort {
  constructor(private _client: HttpClient) {}

  getAll(criterion: Partial<FeatureFlagDTO>): Observable<FeatureFlagDTO[]> {
    return this._client
      .get<{ feature: FeatureFlagDTO }[]>(
        'https://api.flagsmith.com/api/v1/flags',
        {
          headers: {
            'X-Environment-Key': 'DAD8rYqjjrKqaEtDaVJRgR',
          },
        }
      )
      .pipe(map((response) => response.map((i) => i.feature)));
  }
}
