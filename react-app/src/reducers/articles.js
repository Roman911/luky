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
    case 'SET_ARTICLES_SPEEDWAY':
      return {
        ...state,
        items: action.payload.filter(o => o.category === "speedway")
      };
    case 'SET_ARTICLES_TRAVEL':
      return {
        ...state,
        items: action.payload.filter(o => o.category === "travel")
      };
    default:
      return state;
  }
};