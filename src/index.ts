import { Conf } from './lib/conf'
import { payPayRestSDK, PayPayRestSDK } from './lib/paypay-rest-sdk'

export const Configure = payPayRestSDK.configure
export const CreatePayment = payPayRestSDK.createPayment
export const QRCodeCreate = payPayRestSDK.qrCodeCreate
export const QRCodeDelete = payPayRestSDK.qrCodeDelete
export const GetCodePaymentDetails = payPayRestSDK.getCodePaymentDetails
export const GetPaymentDetails = payPayRestSDK.getPaymentDetails
export const PaymentCancel = payPayRestSDK.paymentCancel
export const PaymentAuthCapture = payPayRestSDK.paymentAuthCapture
export const PaymentAuthRevert = payPayRestSDK.paymentAuthRevert
export const PaymentRefund = payPayRestSDK.paymentRefund
export const PaymentPreauthorize = payPayRestSDK.paymentPreauthorize
export const GetRefundDetails = payPayRestSDK.getRefundDetails
export const CheckUserWalletBalance = payPayRestSDK.checkUserWalletBalance
export const Authorization = payPayRestSDK.authorization
export const AuthorizationResult = payPayRestSDK.authorizationResult
export const AccountLinkQRCodeCreate = payPayRestSDK.accountLinkQRCodeCreate
export const ValidateJWT = payPayRestSDK.validateJWT
export const CreateSubscriptionPayment = payPayRestSDK.paymentSubscription
export const CreatePendingPayment = payPayRestSDK.createPendingPayment
export const GetPendingPaymentDetails = payPayRestSDK.getPendingPaymentDetails
export const CancelPendingOrder = payPayRestSDK.cancelPendingOrder
export const RefundPendingPayment = payPayRestSDK.refundPendingPayment
export const GetUserAuthorizationStatus = payPayRestSDK.getUserAuthorizationStatus
export const UnlinkUser = payPayRestSDK.unlinkUser
export const CashBack = payPayRestSDK.cashBack
export const CheckCashBackDetails = payPayRestSDK.getCashBackDetails
export const ReversalCashBack = payPayRestSDK.reverseCashBack
export const CheckCashBackReversalDetails = payPayRestSDK.getReverseCashBackDetails
export { PayPayRestSDK, Conf }
