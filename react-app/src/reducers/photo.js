const initialState = {
  photo: null,
  idPhoto: null,
  showed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ID_PHOTO':
      return {
        ...state,
        idPhoto: action.payload,
      };
    case 'SET_PHOTO':
      return {
        ...state,
        photo: action.payload,
      };
    case 'SET_SHOWED':
      return {
        ...state,
        showed: action.payload,
      };
    case 'REMOVE_SHOWED':
      return {
        ...state,
        showed: action.payload
      };
    default:
      return state;
  }
};