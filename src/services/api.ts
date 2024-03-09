import { BASEURL } from "../constants/constants";

export const fetchData = async () => {
  try {
    const res = await fetch(BASEURL);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Smth went wrong!", error);
  }
};
