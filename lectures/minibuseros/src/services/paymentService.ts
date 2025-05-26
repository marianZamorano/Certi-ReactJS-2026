import jsonServerInstance from "../api/jsonServerInstance";

export const getPaymentType = async () => {
  try {
    const response = await jsonServerInstance.get("paymentTypes");
    return response.data;
  } catch (error) {
    console.error("Error fetching payment types:", error);
    throw error;
  }
};
