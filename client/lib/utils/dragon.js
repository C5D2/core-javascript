const END_POINT = "https://jsonplaceholder.typicode.com/users";

// await 병

const defaultOptions = {
  method: "GET",
  body: null,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const dragon = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const response = await fetch(url, restOptions); // Promise<Response>

  // ok : status 200 ~ 399
  if (response.ok) {
    // 통신 성공

    response.data = await response.json();

    return response;
  }
};

// const result = await dragon({
//   url: END_POINT,
// });

dragon.get = (url, options) => {
  return dragon({ url, ...options });
};

dragon.post = (url, body, options) => {
  return dragon({
    method: "post",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

dragon.delete = (url, options) => {
  return dragon({
    method: "delete",
    url,
    ...options,
  });
};

// const data = await dragon.get(END_POINT);
// const data = await dragon.post(END_POINT, {name:"tiger"});

// dragon.post();
// dragon.put();
// dragon.delete();
