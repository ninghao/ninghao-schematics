import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { CommonService } from '../../common/services/common.service';
import { <%= classify(name) %>Entity } from './<%= dasherize(name) %>.entity';

@EventSubscriber()
export class <%= classify(name) %>EntitySubscriber
  implements EntitySubscriberInterface<<%= classify(name) %>Entity>
{
  constructor(connection: Connection, private commonService: CommonService) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return <%= classify(name) %>Entity;
  }

  async beforeInsert(event: InsertEvent<<%= classify(name) %>Entity>) {
    event.entity.id = this.commonService.uid();
  }
}
