const initialState = {
  isReady: false,
  items: null,
  idItems: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        items: action.payload,
        isReady: true,
      };
    case 'SET_ID':
      return {
        ...state,
        idItems: action.payload,
      };
    default:
      return state;
  }
};