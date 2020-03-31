import { ROUTES } from "../../utils";

export const addCourse = () => async dispatch => {
  try {
    const response = await fetch(`${ROUTES.SCRAP_ROUTE}?url=${link}`);
    dispatch({
      type: "ADD_COURSE",
      payload: JSON.parse(response).data.result
    });
    setCurrentCourses([...currentCourses, JSON.parse(response).data.result]);
  } catch (e) {
    console.log("An Error Occurred");
  }
};
