import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { FeatureFlagDtoStorage } from '../../../application/ports/secondary/feature-flag-dto.storage-port';

@Injectable()
export class InMemoryFeatureFlagsStorage implements FeatureFlagDtoStorage {
  private _subject = new ReplaySubject<Map<string, boolean>>();
  setState(state: Map<string, boolean>): void {
    this._subject.next(state);
  }
  select(): Observable<Map<string, boolean>> {
    return this._subject.asObservable();
  }
}
