import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetsAllFeatureFlagContextDtoPort } from '../../../application/ports/secondary/gets-all-feature-flag-context.dto-port';
import { FeatureFlagContextDTO } from '../../../application/ports/secondary/feature-flag-context.dto';
import { environment } from 'src/environments/environment';
import { FeatureFlagDTO } from '../../../application/ports/secondary/feature-flag.dto';
import { FlagSmithFlagsResponse } from './responses';

@Injectable()
export class HttpIdentityService implements GetsAllFeatureFlagContextDtoPort {
  constructor(private _client: HttpClient) {}

  getAll(context: FeatureFlagContextDTO): Observable<Set<FeatureFlagDTO>> {
    return this._client
      .get<{ flags: FlagSmithFlagsResponse[] }>(
        `${environment.flagsmith.url}/api/v1/identities/?identifier=${context.identity}`,
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
              response.flags.map((i) => ({
                id: i.id,
                name: i.feature.name,
                isEnabled: i.enabled,
              }))
            )
        )
      );
  }
}
