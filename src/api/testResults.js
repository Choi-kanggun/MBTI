import { jsonApi } from "../instance/axiosInstance";

export const getTestResults = async () => {
  try {
    const { data } = await jsonApi.get("/testResults");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTestResult = async (resultData) => {
  try {
    const { data } = await jsonApi.post("/testResults", resultData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTestResult = async (id) => {
  try {
    const { data } = await jsonApi.delete(`/testResults/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const { data } = await jsonApi.patch(`/testResults/${id}`, {
      visibility,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
