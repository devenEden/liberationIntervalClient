const headers = {
  authorization: localStorage.getItem("auth_token"),
};

export const getDataFromServer = async (api_url, path) => {
  try {
    const mixtapes = await fetch(`${api_url}${path}`, { headers })
      .then((res) => res)
      .catch((err) => err);

    return mixtapes.json();
  } catch (error) {
    console.error(error);
  }
};

export const sendDataToServer = async (api_url, values, config) => {
  try {
    const res = await fetch(api_url, {
      method: config.method,
      headers: {
        authorization: headers.authorization,
        "Content-type": config.contentType,
      },
      body: JSON.stringify(values),
    }).catch((err) => err);

    const apiResponse = res
      .json()
      .then((response) => {
        return response;
      })
      .catch((err) => err);

    return apiResponse;
  } catch (error) {
    console.error("Error occured while sending the data to the server");
  }
};

export const sendFormDataToServer = async (api_url, values, config) => {
  try {
    const data = new FormData();
    data.append(values.name, values.file);
    data.append("_id", localStorage.getItem("mixtapeId"));
    const res = await fetch(api_url, {
      method: config.method,
      headers: {
        authorization: headers.authorization,
      },
      body: data,
    }).catch((err) => err);

    const apiResponse = res
      .json()
      .then((response) => {
        return response;
      })
      .catch((err) => {return err});

    return apiResponse;
  } catch (error) {
    console.error("Error occured while sending the data to the server");
  }
};
