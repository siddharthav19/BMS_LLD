import BookingManager from "./Bookings/BookingManager";
import BMSEvent from "./EventSchedules/BMSEvent";
import EventVenueMapper from "./EventSchedules/EventVenueMapper";
import Venue from "./EventSchedules/Venue";
import { PaymentType } from "./Payments/enums";
import PaymentManager from "./Payments/PaymentManager";
import { SeatCategory, Status } from "./Seats/enums";
import Seats from "./Seats/Seats";
import Person from "./Users/Person";
import User from "./Users/User";

const event = new BMSEvent("movie", "The Green Mile");
const venue = new Venue(
  "pvr inox",
  "chennai",
  [0, 0],
  "ashok nagar chennai",
  new Date()
);
const evMapper = new EventVenueMapper(event, venue);

const seatMap = new Map<string, Seats>();

seatMap.set("A1", new Seats(SeatCategory.gold, "A1", 1000));

seatMap.set("A2", new Seats(SeatCategory.gold, "A2", 1000));
evMapper.seatMap = seatMap;

const bookingManager = new BookingManager(
  evMapper,
  new PaymentManager(PaymentType.UPI),
  new User(
    new Person({
      name: "Sid",
      type: "User",
      email: "sid@gmail.com",
      phoneNumber: "1234567891",
      password: "password!",
    })
  )
);

bookingManager.selectSeats(["A1", "A2"]);
bookingManager.initiatePayment();
