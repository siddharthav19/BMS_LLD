import { SeatCategory, Status } from "./enums";

class Seats {
  private readonly _category: SeatCategory;
  private _status: Status;
  private _seatNumber: string;
  private readonly _seatPrice: number;

  constructor(category: SeatCategory, seatNumber: string, seatPrice: number) {
    this._category = category;
    this._status = Status.AVAILABLE;
    this._seatNumber = seatNumber;
    this._seatPrice = seatPrice;
  }

  get status(): Status {
    return this._status;
  }

  get category(): SeatCategory {
    return this._category;
  }

  set status(value: Status) {
    this._status = value;
  }

  get seatNumber(): string {
    return this._seatNumber;
  }

  set seatNumber(value: string) {
    this._seatNumber = value;
  }

  get seatPrice(): number {
    return this._seatPrice;
  }
}

export default Seats;
