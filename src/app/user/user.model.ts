export class User {
  private name: string;
  private mail: string;

  constructor(name: string, mail: string) {
    this.name = name;
    this.mail = mail;
  }

  getName(): string {
    return this.name;
  }

  getMail(): string {
    return this.mail;
  }
}
