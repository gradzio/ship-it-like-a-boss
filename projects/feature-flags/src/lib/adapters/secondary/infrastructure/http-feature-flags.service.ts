import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetsAllFeatureFlagDtoPort } from '../../../application/ports/secondary/gets-all-feature-flag.dto-port';
import { FeatureFlagDTO } from '../../../application/ports/secondary/feature-flag.dto';
import { environment } from 'src/environments/environment';
import { FlagSmithFlagsResponse } from './responses';

@Injectable()
export class HttpFeatureFlagsService implements GetsAllFeatureFlagDtoPort {
  constructor(private _client: HttpClient) {}

  getAll(): Observable<Set<FeatureFlagDTO>> {
    return this._client
      .get<FlagSmithFlagsResponse[]>(
        `${environment.flagsmith.url}/api/v1/flags`,
        {
          headers: {
            'X-Environment-Key': environment.flagsmith.environmentKey,
          },
        }
      )
      .pipe(
        map(
          (response) =>
            new Set(
              response.map((i) => ({
                id: i.id,
                name: i.feature.name,
                isEnabled: i.enabled,
              }))
            )
        )
      );
  }
}
