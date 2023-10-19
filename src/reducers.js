
// reducers.js
const initialState = {
    posts: [],
    // Add other necessary state properties here
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define your action types and corresponding state changes here
      default:
        return state;
    }
  };
  
  export default rootReducer;
