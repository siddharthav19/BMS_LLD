enum PaymentType {
  CREDIT_CARD = "credit_card",
  DEBIT_CARD = "debit_card",
  NET_BAKING = "net_banking",
  UPI = "upi",
}
enum PaymentStatus {
  PENDING = "pending",
  SUCCESSFUL = "successful",
  FAILED = "failed",
}
export { PaymentStatus, PaymentType };
