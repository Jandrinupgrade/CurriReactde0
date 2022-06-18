export const ADD_BUSINESS = "ADD_BUSINESS";
export const DELETE_BUSINESS = "DELETE_BUSINESS";

export const addBusiness = (newBusiness) => (dispatch) => {
  console.log(newBusiness);
  dispatch({
    type: ADD_BUSINESS,
    payload: newBusiness,
  });
};

export const deleteBusiness = (businessToDelete) => (dispatch) => {
  dispatch({
    type: DELETE_BUSINESS,
    payload: businessToDelete,
  });
};
