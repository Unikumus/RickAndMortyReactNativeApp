import  axios from "axios";


export const usersAPI = {
  getCharacter () {
    return  axios.get("https://rickandmortyapi.com/api/character/?page=1")
      .then(response => {
        return response.data.results;
      });
  },
}

