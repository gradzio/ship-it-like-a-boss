import { Directive, Input, Inject } from '@angular/core';
import {
  GETS_CURRENT_FEATURE_FLAG_QUERY,
  GetsCurrentFeatureFlagQueryPort,
} from '../../../application/ports/primary/gets-current-feature-flag.query-port';

@Directive({ selector: '[ifFlag]' })
export class IfFlagDirective {
  @Input() set ifFlag(flagName: string) {
    this._getsCurrentFeatureFlagQuery
      .getCurrentFeatureFlagQuery(flagName)
      .subscribe((flagQuery) => console.log('Directive', flagName, flagQuery));
  }

  constructor(
    @Inject(GETS_CURRENT_FEATURE_FLAG_QUERY)
    private _getsCurrentFeatureFlagQuery: GetsCurrentFeatureFlagQueryPort
  ) {}
}
