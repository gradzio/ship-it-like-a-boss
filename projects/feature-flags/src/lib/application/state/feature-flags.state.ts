import { Injectable, Inject } from '@angular/core';
import { LoadFeatureFlagsCommand } from '../ports/primary/load-feature-flags.command';
import { LoadFeatureFlagsCommandPort } from '../ports/primary/load-feature-flags.command-port';
import {
  FeatureFlagDtoStorage,
  FEATURE_FLAG_DTO_STORAGE,
} from '../ports/secondary/feature-flag-dto.storage-port';
import {
  GETS_ALL_FEATURE_FLAG_DTO,
  GetsAllFeatureFlagDtoPort,
} from '../ports/secondary/gets-all-feature-flag.dto-port';
import {
  GETS_ALL_FEATURE_FLAG_CONTEXT_DTO,
  GetsAllFeatureFlagContextDtoPort,
} from '../ports/secondary/gets-all-feature-flag-context.dto-port';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsCurrentFeatureFlagQueryPort } from '../ports/primary/gets-current-feature-flag.query-port';
import { FeatureFlagQuery } from '../ports/primary/feature-flag.query';

@Injectable()
export class FeatureFlagsState
  implements LoadFeatureFlagsCommandPort, GetsCurrentFeatureFlagQueryPort
{
  constructor(
    @Inject(FEATURE_FLAG_DTO_STORAGE)
    private _featureFlagDtoStorage: FeatureFlagDtoStorage,
    @Inject(GETS_ALL_FEATURE_FLAG_DTO)
    private _getsAllFeatureFlagDto: GetsAllFeatureFlagDtoPort,
    @Inject(GETS_ALL_FEATURE_FLAG_CONTEXT_DTO)
    private _getsAllFeatureFlagContextDto: GetsAllFeatureFlagContextDtoPort
  ) {}

  loadFeatureFlags(command: LoadFeatureFlagsCommand): void {
    if (command.identity === null) {
      this._getsAllFeatureFlagDto
        .getAll()
        .subscribe((flags) =>
          this._featureFlagDtoStorage.setState(
            [...flags].reduce(
              (flags, flag) => flags.set(flag.name, flag.isEnabled),
              new Map<string, boolean>()
            )
          )
        );
    } else {
      this._getsAllFeatureFlagContextDto
        .getAll({ identity: command.identity })
        .subscribe((flags) =>
          this._featureFlagDtoStorage.setState(
            [...flags].reduce(
              (flags, flag) => flags.set(flag.name, flag.isEnabled),
              new Map<string, boolean>()
            )
          )
        );
    }
  }

  getCurrentFeatureFlagQuery(flagName: string): Observable<FeatureFlagQuery> {
    return this._featureFlagDtoStorage
      .select()
      .pipe(
        map(
          (data) =>
            new FeatureFlagQuery(
              data.has(flagName) && data.get(flagName) === true
            )
        )
      );
  }
}
