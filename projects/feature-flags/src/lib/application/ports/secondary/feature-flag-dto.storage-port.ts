import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureFlagDTO } from './feature-flag.dto';

export const FEATURE_FLAG_DTO_STORAGE =
  new InjectionToken<FeatureFlagDtoStorage>('FEATURE_FLAG_DTO_STORAGE');

export interface FeatureFlagDtoStorage {
  setState(state: Map<string, boolean>): void;
  select(): Observable<Map<string, boolean>>;
}
