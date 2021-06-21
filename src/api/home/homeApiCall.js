const headers = {
  authorization: localStorage.getItem("auth_token"),
};

export const getAllMixtapesFromServer = async (api_url, path, body) => {
  try {
    const mixtapes = await fetch(`${api_url}${path}`, { headers })
      .then((res) => res)
      .catch((err) => err);

    return mixtapes.json();
  } catch (error) {
    console.error('Server failed to respond when fetching required mixtapes');
  }
};
