import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpFeatureFlagsService } from './http-feature-flags.service';
import { GETS_ALL_FEATURE_FLAG_DTO } from '../../../application/ports/secondary/gets-all-feature-flag.dto-port';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    HttpFeatureFlagsService,
    {
      provide: GETS_ALL_FEATURE_FLAG_DTO,
      useExisting: HttpFeatureFlagsService,
    },
  ],
  exports: [],
})
export class HttpFeatureFlagsServiceModule {}
