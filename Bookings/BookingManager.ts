import EventVenueMapper from "../EventSchedules/EventVenueMapper";
import PaymentManager from "../Payments/PaymentManager";
import Bookings from "./Bookings";
import NotificationService from "../Notifications/NotificationService";
import NotificationType from "../Notifications/enums";
import User from "../Users/User";
import BookingsType from "./enums";

class BookingManager {
  private _eventVenueMapper: EventVenueMapper;
  private _selectedSeats: string[];
  private _paymentManager: PaymentManager;
  private readonly _booking: Bookings;
  private _notificationService: NotificationService;
  private readonly _user: User;
  constructor(
    eventVenueMapper: EventVenueMapper,
    paymentManager: PaymentManager,
    user: User
  ) {
    this._eventVenueMapper = eventVenueMapper;
    this._selectedSeats = [];
    this._paymentManager = paymentManager;
    this._booking = new Bookings([]);
    this._notificationService = NotificationService.getInstance();
    this._user = user;
  }

  public selectSeats(seats: string[]): void {
    this._selectedSeats = seats;
    this._booking.bookedSeats = this._eventVenueMapper.getSeats(
      this._selectedSeats
    );
  }

  public getNotificationType(status: boolean): NotificationType {
    return status ? NotificationType.CONFIRMED : NotificationType.CANCELLED;
  }

  public initiatePayment() {
    this._eventVenueMapper.lockSeats(this._selectedSeats);
    this._paymentManager.initiatePayment();
    const paymentStatus = this._paymentManager.makePayment();
    if (paymentStatus) {
      this._eventVenueMapper.bookSeats(this._selectedSeats);
    }
    this._booking.bookingStatus = paymentStatus
      ? BookingsType.CONFIRMED
      : BookingsType.CANCELLED;
    this._eventVenueMapper.unlockSeats(this._selectedSeats);
    this._notificationService.sendNotification(
      this.getNotificationType(paymentStatus),
      this._user,
      this._booking
    );
    return paymentStatus;
  }
}

export default BookingManager;
