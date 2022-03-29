import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {
  FeatureFlagsStateModule,
  HttpFeatureFlagsServiceModule,
  HttpIdentityServiceModule,
  InMemoryFeatureFlagsStorageModule,
} from '@feature-flags';
import { FeatureFlagsState } from 'projects/feature-flags/src/lib/application/state/feature-flags.state';
import { LoadFeatureFlagsCommand } from 'projects/feature-flags/src/lib/application/ports/primary/load-feature-flags.command';
import { CommonModule } from '@angular/common';
import { IfFlagDirectiveModule } from 'projects/feature-flags/src/lib/adapters/primary/ui/if-flag.directive-module';

function loadFlagsInitializer(ffState: FeatureFlagsState): () => void {
  return () =>
    ffState.loadFeatureFlags(
      new LoadFeatureFlagsCommand(localStorage.getItem('acme_identity'))
    );
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    InMemoryFeatureFlagsStorageModule,
    HttpFeatureFlagsServiceModule,
    HttpIdentityServiceModule,
    FeatureFlagsStateModule,
    IfFlagDirectiveModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadFlagsInitializer,
      multi: true,
      deps: [FeatureFlagsState],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
