import { NgModule } from '@angular/core';
import { FEATURE_FLAG_DTO_STORAGE } from '../../../application/ports/secondary/feature-flag-dto.storage-port';
import { InMemoryFeatureFlagsStorage } from './in-memory-feature-flags.storage';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryFeatureFlagsStorage,
    {
      provide: FEATURE_FLAG_DTO_STORAGE,
      useExisting: InMemoryFeatureFlagsStorage,
    },
  ],
  exports: [],
})
export class InMemoryFeatureFlagsStorageModule {}
