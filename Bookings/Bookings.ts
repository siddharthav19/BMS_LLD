import Seats from "../Seats/Seats";
import BookingsType from "./enums";

class Bookings {
  private _bookedSeats: Seats[];
  private _bookingStatus: BookingsType;
  constructor(seatsToBook: Seats[]) {
    this._bookedSeats = seatsToBook;
    this._bookingStatus = BookingsType.PENDING;
  }

  get bookingStatus(): BookingsType {
    return this._bookingStatus;
  }

  set bookingStatus(value: BookingsType) {
    this._bookingStatus = value;
  }

  set bookedSeats(value: Seats[]) {
    this._bookedSeats = value;
  }

  public getBookedSeats(): Seats[] {
    return this._bookedSeats;
  }
  public totalBookedSeats(): number {
    return this._bookedSeats.length;
  }
  public calculatePrice(): number {
    return this._bookedSeats.reduce(
      (acc, seat) => acc + (seat.seatPrice || 0),
      0
    );
  }
}

export default Bookings;
