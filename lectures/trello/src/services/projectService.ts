import jsonServerInstance from "../api/jsonInstance";

export const getProjectByUserId = async (userId: string) => {
  try {
    const response = await jsonServerInstance.get(`/projects?owner=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
