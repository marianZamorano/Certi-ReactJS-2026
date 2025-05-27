import jsonServerInstance from "../api/jsonServerInstance";

const PAYMENT_URL = "paymentTypes";

export const getPaymentType = async () => {
  try {
    const response = await jsonServerInstance.get(PAYMENT_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching payment types:", error);
    throw error;
  }
};
