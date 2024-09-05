import Person from "./Person";

class User {
  private _person: Person;
  constructor(person: Person) {
    this._person = person;
  }
  public updateName(name: string) {
    this._person.name = name;
  }
  get person(): Person {
    return this._person;
  }

  public getName(): string {
    return this._person.name;
  }
  set person(value: Person) {
    this._person = value;
  }
}

export default User;
