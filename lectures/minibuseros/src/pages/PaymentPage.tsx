import { ListPaymentsComponent } from "../components/ListPaymentsComponent";
import { PaymentFormComponent } from "../components/PaymentFormComponent";

function PaymentPage() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/2 bg-white p-4">
        <PaymentFormComponent />
      </div>
      <div className=" w-1/2 bg-amber-100 p-4">
        <ListPaymentsComponent />
      </div>
    </div>
  );
}

export default PaymentPage;
