import Person from "../Users/Person";
import NotificationType from "./enums";
import Bookings from "../Bookings/Bookings";
import User from "../Users/User";
import BookingsType from "../Bookings/enums";

class NotificationService {
  private static instance: NotificationService;

  private constructor() {}

  public static getInstance(): NotificationService {
    if (!NotificationService.instance)
      NotificationService.instance = new NotificationService();
    return NotificationService.instance;
  }
  // we can have strategy for this notifications like SMS,EMAIL,WHATSAPP
  public sendNotification(
    notification: NotificationType,
    user: User,
    bookingDetails: Bookings
  ): void {
    if (bookingDetails.bookingStatus === BookingsType.CANCELLED) {
      console.log(`Payment failed for user: ${user.getName()}`);
      return;
    }
    console.log(
      `Sending ${notification} Notification to ${user.getName()} through email, total price : ${bookingDetails.calculatePrice()}`
    );
  }
}

export default NotificationService;
