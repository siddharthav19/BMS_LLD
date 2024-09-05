import { PaymentStatus, PaymentType } from "./enums";

class Payment {
  private _paymentStatus: string;
  private _paymentType: string;

  constructor(paymentType: string) {
    this._paymentType = paymentType;
    this._paymentStatus = "";
  }

  get paymentType(): string {
    return this._paymentType;
  }

  set paymentType(value: string) {
    this._paymentType = value;
  }

  get paymentStatus(): string {
    return this._paymentStatus;
  }

  set paymentStatus(value: string) {
    this._paymentStatus = value;
  }
}
class PaymentManager {
  private readonly _payment: Payment;

  constructor(paymentType: PaymentType) {
    this._payment = new Payment(paymentType);
  }

  public makePayment(): boolean {
    if (Date.now() % 2 === 0) {
      this._payment.paymentStatus = PaymentStatus.FAILED;
      return false;
    }
    this._payment.paymentStatus = PaymentStatus.SUCCESSFUL;
    return true;
  }

  public initiatePayment() {
    this._payment.paymentStatus = PaymentStatus.PENDING;
  }
}

export default PaymentManager;
