import jsonServerInstance from "../api/jsonInstance";

export const login = async (email: string, password: string) => {
  const response = await jsonServerInstance.get("/users", {
    params: { email, password },
  });
  return response.data[0];
};
