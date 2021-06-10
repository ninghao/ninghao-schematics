import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { <%= classify(name) %>Command } from './<%= dasherize(name) %>.command';

@CommandHandler(<%= classify(name) %>Command)
export class  <%= classify(name) %>CommandHandler
  implements ICommandHandler<<%= classify(name) %>Command>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: <%= classify(name) %>Command) {
    return command;
  }
}
