import * as API from "../Api/API";
const sendMessage = (data) => async (dispatch)=>{
  try{
     await API.SendMessage(data);
     dispatch({
      type:"SEND_MESSAGE",
      data:data,
     })
  }
  catch(error){
      console.log(error)
  }
}

export default sendMessage;