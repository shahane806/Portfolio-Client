export const sendMessageReducer = async (state = { data: null }, action) => {
    switch (action.type) {
      case "SEND_MESSAGE":
  
        return { ...state, ...action?.data };
  
      default:
        return state;
    }
  };
  