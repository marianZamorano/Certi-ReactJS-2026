import { useEffect, useState } from "react";
import type { FormPaymentData } from "../pages/PaymentPage";
import { getPaymentType } from "../services/PaymentService";

import { Button } from "./Button";

interface PaymentFormComponentProps {
  formData: FormPaymentData;
}
export const PaymentFormComponent = ({
  formData,
}: PaymentFormComponentProps) => {
  const [errorPayment, setErrorPayment] = useState(false);
  const [errorMessagePayment, setErrorMessagePayment] = useState("");

  const isValidPayment = (payment: string) => {
    if (payment === "") {
      return true;
    }
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(payment);
  };

  const getPayments = async () => {
    const response = await getPaymentType();
    console.log("PAYMENTS ========", response);

    return response;
  };

  useEffect(() => {
    const result = getPayments();
  }, []);

  useEffect(() => {
    if (!isValidPayment(formData.payment)) {
      setErrorPayment(true);
      setErrorMessagePayment("El nombre del gasto no es valido");
    }
    //  if (!isValidAmount(formData.payment)) {
    //   setErrorPayment(true);
    //   setErrorMessagePayment("El nombre del gasto no es valido");
    // }
  }, [formData]);
  return (
    <form className="max-w-sm mx-auto ">
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
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder="Nombre del Gasto"
          required
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
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
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
          id="payments"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="payments"
          // value={formData.type}
          // onChange={(e) => formData.setPaymentType(e.target.value)
        >
          <option>Seleccionar tipo de Gasto</option>
          <option value="1">Alimentacion</option>
          <option value="2">Juegos</option>
          <option value="3">Transporte</option>
          <option value="4">Otros</option>
        </select>
      </div>
      {/* <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button> */}
      {/* <Button text="Ingresar Gasto" /> */}
    </form>
  );
};
