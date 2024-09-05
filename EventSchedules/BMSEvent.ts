class BMSEvent {
  private _type: String;
  private _name: String;
  constructor(type: String, name: String) {
      this._type = type;
      this._name = name;
  }

  get type(): String {
      return this._type;
  }

  set type(value: String) {
      this._type = value;
  }

  get name(): String {
      return this._name;
  }

  set name(value: String) {
      this._name = value;
  }
}

export default BMSEvent;
