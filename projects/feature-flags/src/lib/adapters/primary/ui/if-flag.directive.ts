import {
  Directive,
  Input,
  Inject,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import {
  GETS_CURRENT_FEATURE_FLAG_QUERY,
  GetsCurrentFeatureFlagQueryPort,
} from '../../../application/ports/primary/gets-current-feature-flag.query-port';

@Directive({ selector: '[ifFlag]' })
export class IfFlagDirective {
  @Input() set ifFlag(flagName: string) {
    this._getsCurrentFeatureFlagQuery
      .getCurrentFeatureFlagQuery(flagName)
      .subscribe((flagQuery) => {
        if (flagQuery.hasFeature) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
        this.cdr.detectChanges();
      });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    @Inject(GETS_CURRENT_FEATURE_FLAG_QUERY)
    private _getsCurrentFeatureFlagQuery: GetsCurrentFeatureFlagQueryPort
  ) {}
}
