import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { <%= classify(name) %>Event } from './<%= dasherize(name) %>.event';

@EventsHandler(<%= classify(name) %>Event)
export class <%= classify(name) %>EventHandler
  implements IEventHandler<<%= classify(name) %>Event>
{
  handle(event: <%= classify(name) %>Event) {
    return event;
  }
}

