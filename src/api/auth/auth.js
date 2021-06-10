export const authApiCall = async (api_url,values,reqUrl) => {
    try {
      const res =  await fetch(`${api_url}${reqUrl}`,{
            method: 'Post',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(values)
        }).catch(err => {
            console.error(err)
            return err;
        });
        
        const apiResponse =   res.json()
           .then(response => {
               console.log(response);
               return response;
           })
           .catch(err => {
            console.log(err);
               return err;
           });

           return apiResponse;
    } catch (error) {
        console.error(error);
        return error;
    }
}

