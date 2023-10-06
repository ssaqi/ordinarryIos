export const setUser = (user) => {
    return { type: 'SET_USER', payload: user };
  };
 
  export const setProfileImage = (imageUri) => {
    return { type: 'SET_PROFILE_IMAGE', payload: imageUri };
  };

  