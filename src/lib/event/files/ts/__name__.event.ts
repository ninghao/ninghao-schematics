export interface <%= classify(name) %>EventParams {
  
}

export class <%= classify(name) %>Event {
  constructor(public readonly params: <%= classify(name) %>EventParams) {}
}
