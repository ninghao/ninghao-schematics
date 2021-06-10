import { Injectable } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class <%= classify(name) %>Saga {
  @Saga()
  <%= name %>(events$: Observable<any>) {
    return events$.pipe(
      ofType(),
      map((event) => null),
    );
  }
}
