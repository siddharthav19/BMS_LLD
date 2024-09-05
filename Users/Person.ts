interface PersonDetails {
  name: string;
  type: string;
  email: string;
  phoneNumber: string;
  password: string;
}

class Person {
  private _name: string;
  private _type: string;
  private _email: string;
  private _phoneNumber: string;
  private _password: string;
  constructor(details: PersonDetails) {
      this._name = details.name;
      this._type = details.type;
      this._email = details.email;
      this._phoneNumber = details.phoneNumber;
      this._password = details.password;
  }

  set name(value: string) {
      this._name = value;
  }

  set email(value: string) {
      this._email = value;
  }

  set phoneNumber(value: string) {
      this._phoneNumber = value;
  }
  set type(value: string) {
      this._type = value;
  }

  set password(value: string) {
      this._password = value;
  }

  get type(): string {
      return this._type;
  }

  get password(): string {
      return this._password;
  }

  get name(): string {
      return this._name;
  }

  get email(): string {
      return this._email;
  }

  get phoneNumber(): string {
      return this._phoneNumber;
  }
}

export default Person;
