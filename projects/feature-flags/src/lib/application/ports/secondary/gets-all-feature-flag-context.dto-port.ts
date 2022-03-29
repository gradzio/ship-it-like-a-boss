import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureFlagContextDTO } from './feature-flag-context.dto';
import { FeatureFlagDTO } from './feature-flag.dto';

export const GETS_ALL_FEATURE_FLAG_CONTEXT_DTO =
  new InjectionToken<GetsAllFeatureFlagContextDtoPort>(
    'GETS_ALL_FEATURE_FLAG_CONTEXT_DTO'
  );

export interface GetsAllFeatureFlagContextDtoPort {
  getAll(context: FeatureFlagContextDTO): Observable<Set<FeatureFlagDTO>>;
}
