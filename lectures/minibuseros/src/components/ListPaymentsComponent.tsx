import type { FormPaymentData } from "../pages/PaymentPage";

interface ListPaymentsComponentProps {
  payments: FormPaymentData[];
}
export const ListPaymentsComponent = ({
  payments,
}: ListPaymentsComponentProps) => {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Payments List</h2>
      {payments &&
        payments.map((payment, index) => (
          <div
            key={index}
            className="full-width bg-white my-4 p-4 border-2 rounded-lg shadow-lg"
          >
            <p>
              {payment.payment} - {payment.amount} - {payment.type}
            </p>
          </div>
        ))}
    </div>
  );
};
