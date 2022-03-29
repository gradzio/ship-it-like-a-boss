import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpIdentityService } from './http-identity.service';
import { GETS_ALL_FEATURE_FLAG_CONTEXT_DTO } from '../../../application/ports/secondary/gets-all-feature-flag-context.dto-port';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    HttpIdentityService,
    {
      provide: GETS_ALL_FEATURE_FLAG_CONTEXT_DTO,
      useExisting: HttpIdentityService,
    },
  ],
  exports: [],
})
export class HttpIdentityServiceModule {}
