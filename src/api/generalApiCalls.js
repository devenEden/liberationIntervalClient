
const headers = {
    authorization: localStorage.getItem("auth_token"),
  };
  
  export const getDataFromServer = async (api_url, path, body) => {
    try {
      const mixtapes = await fetch(`${api_url}${path}`, { headers })
        .then((res) => res)
        .catch((err) => err);
  
      return mixtapes.json();
    } catch (error) {
      console.error(error);
    }
  };
  