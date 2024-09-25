import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

const options = {
    
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '052bbc2583mshd2cf4425386b1bdp1d7f8ajsne97a4df28a90',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };




export const ApiService ={

     async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}` , options)
        return  response.data

     }


}