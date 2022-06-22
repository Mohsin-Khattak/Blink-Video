import axios from "axios";
export const postFormData = async (Data,url) => {
    let response = "";
    console.log("url :", url," data ",Data);
    const config = {
      method: "GET",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data;application/json",

      },
      data: Data,
    };
    try {
        await axios(config)
        .then((res) => {
          response = res;
        })
    
        .catch((error) => {
          console.log("catch",error.response.data);
        });
        
    } catch (error) {
        console.log("try catch error ",error);
    }
   
    return response;
  };

