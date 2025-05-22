import { useState } from "react";
import { ListPaymentsComponent } from "../components/ListPaymentsComponent";
import { PaymentFormComponent } from "../components/PaymentFormComponent";

export interface FormPaymentData {
  payment: string;
  amount: number;
  type: string;
}
function PaymentPage() {
  const [formData, setFormData] = useState<FormPaymentData>({
    payment: "",
    amount: 0,
    type: "",
  });
  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/2 bg-white p-4">
        <PaymentFormComponent formData={formData} />
      </div>
      <div className=" w-1/2 bg-amber-100 p-4">
        <ListPaymentsComponent />
      </div>
    </div>
  );
}

export default PaymentPage;
