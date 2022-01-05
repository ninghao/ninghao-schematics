export interface <%= classify(name) %>CommandParams {
  
}

export class <%= classify(name) %>Command {
  constructor(public readonly params: <%= classify(name) %>CommandParams) {}
}
