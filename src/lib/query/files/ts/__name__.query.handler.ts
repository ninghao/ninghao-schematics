import { IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';
import { <%= classify(name) %>Query } from './<%= dasherize(name) %>.query';

@QueryHandler(<%= classify(name) %>Query)
export class <%= classify(name) %>QueryHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(query: <%= classify(name) %>Query) {
    return query;
  }
}
