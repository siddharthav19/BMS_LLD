class Venue {
  private _name: string;
  private _coordinates: [number, number];
  private _address: string;
  private _city: string;
  private _date: Date;

  constructor(
    name: string,
    city: string,
    coordinates: [number, number],
    address: string,
    date: Date
  ) {
    this._name = name;
    this._coordinates = coordinates;
    this._address = address;
    this._city = city;
    this._date = date;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get coordinates(): [number, number] {
    return this._coordinates;
  }

  set coordinates(value: [number, number]) {
    this._coordinates = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}

export default Venue;
