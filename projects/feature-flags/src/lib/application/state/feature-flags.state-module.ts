import { NgModule } from '@angular/core';
import { FeatureFlagsState } from './feature-flags.state';
import { GETS_CURRENT_FEATURE_FLAG_QUERY } from '../ports/primary/gets-current-feature-flag.query-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [FeatureFlagsState, { provide: GETS_CURRENT_FEATURE_FLAG_QUERY, useExisting: FeatureFlagsState }],
  	exports: [] })
export class FeatureFlagsStateModule {
}
