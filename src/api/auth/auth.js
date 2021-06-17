export const authApiCall = async (api_url, values, reqUrl) => {
  try {
    const res = await fetch(`${api_url}${reqUrl}`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).catch((err) => {
      console.error(err);
      return err;
    });

    const apiResponse = res
      .json()
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return apiResponse;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const resetPasswordApiCall = async (api_url, values, reqUrl) => {
  try {
    const res = await fetch(`${api_url}${reqUrl}`, {
      method: "Put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).catch((err) => {
      console.error(err);
      return err;
    });

    const apiResponse = res
      .json()
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return apiResponse;
  } catch (error) {
    console.error("catch", error);
    return error;
  }
};

export const verifyTokenApiCall = async (api_url) => {
  const headers = {
    authorization: localStorage.getItem("auth_token"),
  };

  try {
    const res = await fetch(`${api_url}/api/auth/verifyToken`, {
      headers,
    })
      .then((response) => response)
      .catch((err) => err);

    return res.json();
  } catch (error) {
    console.error("here", error);
    return { success: false, error: error.message };
  }
};
