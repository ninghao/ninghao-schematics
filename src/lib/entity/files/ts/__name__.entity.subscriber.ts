import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { <%= classify(name) %>Entity } from './<%= dasherize(name) %>.entity';

@EventSubscriber()
export class <%= classify(name) %>EntitySubscriber
  implements EntitySubscriberInterface<<%= classify(name) %>Entity>
{
  constructor(connection: Connection,) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return <%= classify(name) %>Entity;
  }

  async beforeInsert(event: InsertEvent<<%= classify(name) %>Entity>) {
    // 
  }
}
