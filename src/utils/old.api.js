import queryString from "query-string";

export const sendRequest = async ({
  url,
  method,
  useCredentials = false,
  body,
  headers = {},
  queryParams = {},
}) => {
  const query = queryString.stringify(queryParams);
  const fullUrl = query ? `${url}?${query}` : url;

  const options = {
    method: method,
    headers: new Headers({
      'content-type': 'application/json',
      ...headers,
    }),
    body: body ? JSON.stringify(body) : null,
  };

  if (useCredentials) options.credentials = 'include';

  return fetch(fullUrl, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then(json => {
        return Promise.reject({
          status: res.status,
          ok: false,
          message: json.message,
          body: json,
        });
      });
    }
  });
};
