import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfFlagDirective } from './if-flag.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IfFlagDirective],
  providers: [],
  exports: [IfFlagDirective],
})
export class IfFlagDirectiveModule {}
