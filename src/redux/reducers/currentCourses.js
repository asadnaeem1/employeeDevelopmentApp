export const currentCourses = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_COURSES":
      return payload;
    case "ADD_COURSE":
      return [...state, payload];
    default:
      return state;
  }
};
