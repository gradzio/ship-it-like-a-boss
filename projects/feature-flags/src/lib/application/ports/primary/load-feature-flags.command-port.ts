import { InjectionToken } from '@angular/core';
import { LoadFeatureFlagsCommand } from './load-feature-flags.command';

export const LOAD_FEATURE_FLAGS_COMMAND = new InjectionToken<LoadFeatureFlagsCommandPort>('LOAD_FEATURE_FLAGS_COMMAND');

export interface LoadFeatureFlagsCommandPort {
  loadFeatureFlags(command: LoadFeatureFlagsCommand): void;
}
