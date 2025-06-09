// src/reducers/posts.js

const initialState = []; // 👈 initialState defined kar diya

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postsReducer;
