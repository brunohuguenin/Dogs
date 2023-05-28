import React from 'react'

const UseFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = response.json();
      if(response.ok === false) throw new Error(json.message);
    } catch(err) {
      setError(err.message)
    } finally {
      json = null;
      setData(json);
      setLoading(false);
      return {response, json}
    }
  }, []);

  return (
   {
    data, loading, error, request,
    }
  )
}

export default UseFetch