export interface IExample {
  getMessage(): string;
}

export class Example implements IExample {
  getMessage(): string {
    return 'hi';
  }
}
