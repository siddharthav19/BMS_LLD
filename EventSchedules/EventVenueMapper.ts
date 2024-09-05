import BMSEvent from "./BMSEvent";
import Venue from "./Venue";
import Seats from "../Seats/Seats";
import { Status } from "../Seats/enums";

class EventVenueMapper {
  private _event: BMSEvent;
  private _venue: Venue;
  private _seatMap: Map<string, Seats>;

  constructor(event: BMSEvent, venue: Venue) {
    this._event = event;
    this._venue = venue;
    this._seatMap = new Map<string, Seats>();
  }

  get seatMap(): Map<string, Seats> {
    return this._seatMap;
  }

  set seatMap(value: Map<string, Seats>) {
    this._seatMap = value;
  }

  public isSeatBooked(name: string): boolean {
    if (!this._seatMap.has(name)) return true;
    return this._seatMap.get(name)?.status === Status.AVAILABLE;
  }

  public lockSeats(seats: string[]) {
    seats.forEach((seat) => {
      const currentSeat = this._seatMap.get(seat);
      if (currentSeat) {
        currentSeat.status = Status.LOCKED;
        this._seatMap.set(seat, currentSeat);
      }
    });
  }

  public unlockSeats(seats: string[]) {
    seats.forEach((seat) => {
      const currentSeat = this._seatMap.get(seat);
      if (currentSeat) {
        currentSeat.status = Status.AVAILABLE;
        this._seatMap.set(seat, currentSeat);
      }
    });
  }

  public bookSeats(seats: string[]): { status: boolean; bookedSeats: Seats[] } {
    const bookedSeats: Seats[] = [];
    seats.forEach((seat) => {
      const currentSeat = this._seatMap.get(seat);
      if (currentSeat) {
        currentSeat.status = Status.BOOKED;
        bookedSeats.push(currentSeat);
        this._seatMap.set(seat, currentSeat);
      }
    });
    return { status: bookedSeats.length > 0, bookedSeats: bookedSeats };
  }

  public getSeats(seats: string[]): Seats[] | [] {
    let currentSeats = seats.map((s) => this._seatMap.get(s));
    // @ts-ignore
    currentSeats = currentSeats.filter((s) => s.status === Status.AVAILABLE);
    // @ts-ignore
    return currentSeats.length > 0 ? currentSeats : [];
  }

  get event(): BMSEvent {
    return this._event;
  }

  set event(value: BMSEvent) {
    this._event = value;
  }

  get venue(): Venue {
    return this._venue;
  }

  set venue(value: Venue) {
    this._venue = value;
  }
}

export default EventVenueMapper;
