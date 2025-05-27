import { useEffect, useState } from "react";
import type { FormPaymentData } from "../pages/PaymentPage";
import { getPaymentType } from "../services/PaymentService";
import { object, string, number } from "yup";

import { useFormik } from "formik";

interface PaymentFormComponentProps {
  formData: FormPaymentData;
  setPayments: (payments: FormPaymentData[]) => void;
}

const formSchema = object({
  payment: string().required(),
  amount: number().required().positive().integer(),
  type: string().required(),
});

export const PaymentFormComponent = ({
  formData,
  setPayments
}: PaymentFormComponentProps) => {
  const [errorPayment, setErrorPayment] = useState(false);
  const [errorMessagePayment, setErrorMessagePayment] = useState("");
  const [paymentTypes, setPaymentTypes] = useState<string[]>([]);

  const getPayments = async () => {
    const response = await getPaymentType();
    setPaymentTypes(response);
  };

  const saveData = (formValue: FormPaymentData ) => {
    setPayments((prevPayments) => {
      return [...prevPayments,formValue];
    }); 
  };
  const formik = useFormik({
    initialValues: {
      payment: formData.payment || "",
      amount: formData.amount || "",
      type: formData.type || "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      try {
        saveData(values);
      } catch (error) {
        console.error("Error saving payment data:", error);
      } finally {
        formik.resetForm();
      }
    },
  });

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre del Gasto
        </label>
        <input
          type="text"
          id="payment"
          name="payment"
          onChange={formik.handleChange}
          value={formik.values.payment}
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder="Nombre del Gasto"
        />
        {errorPayment && (
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-light text-red-400 "
          >
            {errorMessagePayment}
          </label>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Monto del Gasto
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={formik.handleChange}
          value={formik.values.amount}
          placeholder="Monto del Gasto"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="payments"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Seleccionar tipo de Gasto
        </label>
        <select
          id="type"
          name="type"
          onChange={formik.handleChange}
          value={formik.values.type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Seleccionar tipo de Gasto</option>
          {paymentTypes.length > 0 &&
            paymentTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
        </select>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
};
