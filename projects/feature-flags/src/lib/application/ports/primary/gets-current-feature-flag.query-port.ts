import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureFlagQuery } from './feature-flag.query';

export const GETS_CURRENT_FEATURE_FLAG_QUERY =
  new InjectionToken<GetsCurrentFeatureFlagQueryPort>(
    'GETS_CURRENT_FEATURE_FLAG_QUERY'
  );

export interface GetsCurrentFeatureFlagQueryPort {
  getCurrentFeatureFlagQuery(flagName: string): Observable<FeatureFlagQuery>;
}
