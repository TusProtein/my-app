import * as request from "~/utils/request";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get(`users/search`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
    // return ra Array cuối
  } catch (error) {
    console.log(error);
  }
};
