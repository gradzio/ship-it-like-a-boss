import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureFlagDTO } from './feature-flag.dto';

export const GETS_ALL_FEATURE_FLAG_DTO =
  new InjectionToken<GetsAllFeatureFlagDtoPort>('GETS_ALL_FEATURE_FLAG_DTO');

export interface GetsAllFeatureFlagDtoPort {
  getAll(): Observable<FeatureFlagDTO[]>;
}
