const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
        case 'SET_PROFILE_IMAGE':
            return {
              ...state,
              user: {
                ...state.user,
                profileImage: action.payload,
              },
            };
      default:
        return state;
    }
  };
  
  export default userReducer;